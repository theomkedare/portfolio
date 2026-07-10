import { NextResponse } from "next/server";
import Razorpay from "razorpay";
import { courses } from "../../../data/courses";

// Initialize Razorpay conditionally to prevent crashes if credentials are not configured yet
const getRazorpayInstance = () => {
  const keyId = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
  const keySecret = process.env.RAZORPAY_KEY_SECRET;

  if (!keyId || !keySecret) {
    return null;
  }

  return new Razorpay({
    key_id: keyId,
    key_secret: keySecret,
  });
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { courseId } = body;

    if (!courseId) {
      return NextResponse.json(
        { error: "Course ID is required." },
        { status: 400 }
      );
    }

    // Find the course in our data source to ensure the price is validated server-side
    const course = courses.find((c) => c.id === courseId);
    if (!course) {
      return NextResponse.json(
        { error: "Course not found." },
        { status: 404 }
      );
    }

    const razorpay = getRazorpayInstance();
    if (!razorpay) {
      console.error("Razorpay environment variables are missing.");
      return NextResponse.json(
        { error: "Razorpay integration is not configured on the server." },
        { status: 500 }
      );
    }

    // Razorpay amount is in the smallest currency unit (paise for INR, i.e. 100 paise = 1 INR)
    const amountInPaise = Math.round(course.price * 100);

    const options = {
      amount: amountInPaise,
      currency: "INR",
      receipt: `receipt_${course.id}_${Math.floor(Math.random() * 1000000)}`,
      notes: {
        courseId: course.id,
        courseName: course.title,
      },
    };

    const order = await razorpay.orders.create(options);

    return NextResponse.json({
      success: true,
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
      courseTitle: course.title,
    });
  } catch (error: any) {
    console.error("Error creating Razorpay order:", error);
    return NextResponse.json(
      { error: error?.message || "Internal server error" },
      { status: 500 }
    );
  }
}
