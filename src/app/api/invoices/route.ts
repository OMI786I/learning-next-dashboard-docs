//GET api/invoices

import { connectDB } from "@/lib/mongoConnect";
import { Invoices } from "@/models/invoices";
import { NextResponse } from "next/server";

export const GET = async (request: Request) => {
  try {
    await connectDB();

    //db.foo.find().sort({$natural:1}).limit(50);
    const invoices = await Invoices.find().sort({ $natural: 1 }).limit(5);

    return new NextResponse(JSON.stringify(invoices));
  } catch (error) {
    console.error("Error fetching charts:", error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
};
