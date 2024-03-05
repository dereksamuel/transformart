import Image from "next/image";
import logoType from "@/assets/images/LogoTipo.svg";
import piggy from "@/assets/images/piggy-mobile.svg";

export default function Home() {
  return (
    <div className="Home">
      <Image src={logoType} className="mx-auto mt-10 mb-5" alt="logoType" />
      <Image src={piggy} width={500} height={500} alt="piggy" className="mx-auto" />
    </div>
  );
}