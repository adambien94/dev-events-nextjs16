"use server";

import Booking from "@/database/booking.model";
import connectDB from "../mongodb";

type CreateBookingBody = {
  eventId: string;
  slug: string;
  email: string;
};

export const createBooking = async ({
  eventId,
  slug,
  email,
}: CreateBookingBody) => {
  try {
    await connectDB();
    await Booking.create({ eventId, slug, email });

    return { success: true };
  } catch (e) {
    console.log("create booking failed", e);
    return { success: false };
  }
};
