import mongoose, { Schema, Document } from "mongoose";

export interface InvoiceDocument extends Document {
  name: string;
  email: string;
  money: number;
}

const invoiceSchema = new Schema<InvoiceDocument>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    money: { type: Number, required: true },
  },
  {
    collection: "Invoices",
  }
);

export const Invoices =
  mongoose.models.Invoices ||
  mongoose.model<InvoiceDocument>("Invoices", invoiceSchema);
