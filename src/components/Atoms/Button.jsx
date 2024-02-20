import classNames from "classnames";

export default function Button({
  variant = "primary",
  children,
  isRounded = false,
  isShadow,
  ...anotherProps
}) {
  const variants = {
    primary: "bg-primary text-darktext",
    secondary: "bg-secondary text-white",
    dark: "bg-dark text-white",
    danger: "bg-danger text-white"
  };
  const basicBtnClass = `m-3 text-base rounded ${isShadow ? "shadow-md" : ""} ${isRounded ? "rounded-full p-4" : "rounded p-3"} font-semibold`;
  const className = classNames(basicBtnClass, variants[variant]);
  return (
    <button className={className} {...anotherProps}>{children}</button>
  );
}
