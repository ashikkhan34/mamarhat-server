import Stripe from "stripe";
import { paymentModel } from "./payment.model.js";
import type { IPayment } from "./payment.interface.js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

// Create Stripe Payment Intent
export const createPaymentService = async (paymentData: IPayment) => {
  // 1️⃣ Create Stripe payment intent
  const paymentIntent = await stripe.paymentIntents.create({
    amount: Math.round(paymentData.amount * 100),
    currency: paymentData.currency,
    metadata: {
      orderId: paymentData.cartId.toString(),
      userId: paymentData.userId.toString(),
    },
  });

  // 2️⃣ Save payment entry in DB
  const payment = await paymentModel.create({
    ...paymentData,
    status: "pending",
    transactionId: paymentIntent.id,
  });

  return {
    clientSecret: paymentIntent.client_secret,
    payment,
  };
};

// Confirm Payment after Success Callback
export const confirmPaymentService = async (transactionId: string) => {
  const payment = await paymentModel.findOne({ transactionId });

  if (!payment) throw new Error("Payment not found");

  payment.status = "success";
  return await payment.save();
};
