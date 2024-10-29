import { connectDB } from "@/lib/mongoConnect";
import Chart from "@/models/charts";
import { NextResponse } from "next/server";

// GET /api/chart

export const GET = async (request: Request) => {
  try {
    await connectDB();
    const charts = await Chart.find();

    return new NextResponse(JSON.stringify(charts));
  } catch (error) {
    console.error("Error fetching charts:", error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
};
