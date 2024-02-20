import Button from "@/components/Atoms/Button";

export default function Home() {
  return <div className="Home">
    <Button>Hola</Button>
    <Button variant="secondary" isRounded isShadow>Iniciar sesion</Button>
    <Button variant="danger">Peligro</Button>
    <Button variant="dark">Hola</Button>
  </div>
}