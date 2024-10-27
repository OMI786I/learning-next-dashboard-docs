import Image from "next/image";
import styles from "../../src/app/ui/home.module.css";
import { lusitana } from "./ui/font";
export default function Home() {
  console.log(lusitana);
  return (
    <>
      <div className={styles.shape}></div>
      <p>Checking fonts(This is inter font which is primary font)</p>
      <p className={`${lusitana.className}`}>This is lusitana</p>

      <Image
        src={"/hero-desktop.png"}
        width={1000}
        height={600}
        alt="A screen shot"
      />
    </>
  );
}
