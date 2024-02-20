import Button from "@/components/Atoms/Button";
import { HiOutlineChevronLeft } from "react-icons/hi";

export default function Home() {
  return <div className="Home">
    <Button>Hola</Button>
    <Button variant="secondary" isRounded isShadow>
      <HiOutlineChevronLeft size={18} />
    </Button>
    <Button variant="danger">Peligro</Button>
    <Button variant="dark">Hola</Button>
  </div>
}