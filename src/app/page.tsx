import Image from "next/image";
import styles from "../../src/app/ui/home.module.css";
import { lusitana } from "./ui/font";
import { BsGlobe } from "react-icons/bs";
import { BiArrowFromRight } from "react-icons/bi";
import { connectDB } from "@/lib/mongoConnect";
export default function Home() {
  return (
    <>
      <div className="bg-blue-500 text-white h-48 rounded-lg flex items-end">
        <span className="flex items-center gap-1">
          <BsGlobe className="text-xl" /> <p className="text-2xl">Acme</p>
        </span>
      </div>
      <div className="grid grid-cols-2 items-center">
        <div className="bg-blue-100 h-full p-24 flex flex-col justify-center items-start gap-2">
          <div className="text-lg">
            <span className="font-bold">Welcome to Acme.</span>This is the
            example for the{" "}
            <span className="text-blue-500">Next.js Learn Course,</span>brought
            to you by Vercel
          </div>

          <button className="btn btn-info">
            Login in <BiArrowFromRight />
          </button>
        </div>
        <div>
          {" "}
          <Image
            src={"/hero-desktop.png"}
            width={700}
            height={400}
            alt="A screen shot"
          />
        </div>
      </div>
    </>
  );
}
