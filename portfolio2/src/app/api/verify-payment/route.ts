import { NextResponse } from "next/server";
import crypto from "crypto";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = body;

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return NextResponse.json(
        { error: "Payment verification parameters are missing." },
        { status: 400 }
      );
    }

    const keySecret = process.env.RAZORPAY_KEY_SECRET;
    if (!keySecret) {
      console.error("RAZORPAY_KEY_SECRET is not configured.");
      return NextResponse.json(
        { error: "Server credentials are not configured." },
        { status: 500 }
      );
    }

    // Creating hmac signature using order_id, payment_id and secret key
    const text = `${razorpay_order_id}|${razorpay_payment_id}`;
    const expectedSignature = crypto
      .createHmac("sha256", keySecret)
      .update(text)
      .digest("hex");

    const isAuthentic = expectedSignature === razorpay_signature;

    if (isAuthentic) {
      // Payment is verified
      return NextResponse.json({
        success: true,
        message: "Payment verified successfully.",
      });
    } else {
      console.warn("Razorpay payment signature mismatch.");
      return NextResponse.json(
        { error: "Invalid payment signature verification failed." },
        { status: 400 }
      );
    }
  } catch (error: any) {
    console.error("Error verifying Razorpay payment:", error);
    return NextResponse.json(
      { error: error?.message || "Internal server error" },
      { status: 500 }
    );
  }
}
