import mongoose, { Schema, Document } from "mongoose";

export interface ChartDocument extends Document {
  month: string;
  revenue: number;
}

const chartSchema = new Schema<ChartDocument>(
  {
    month: { type: String, required: true },
    revenue: { type: Number, required: true },
  },
  {
    timestamps: true,
    collection: "Chart",
  }
);

const Chart =
  mongoose.models.Chart || mongoose.model<ChartDocument>("Chart", chartSchema);
export default Chart;
