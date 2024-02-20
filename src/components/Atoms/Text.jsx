export default function Text({element = <p></p>, children, ...anotherProps}) {
  return (
    <element>{children}</element>
  );
}