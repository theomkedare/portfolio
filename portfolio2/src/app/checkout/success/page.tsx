import { Suspense } from "react";
import SuccessClient from "./SuccessClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Payment Successful | Om Kedare Academy",
  description: "Your course enrollment payment has been processed and verified successfully.",
  robots: {
    index: false, // Don't index checkout success pages
  }
};

export default function CheckoutSuccessPage() {
  return (
    <Suspense 
      fallback={
        <div className="min-h-[70vh] flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-purple-500 border-t-transparent rounded-full animate-spin" />
        </div>
      }
    >
      <SuccessClient />
    </Suspense>
  );
}
