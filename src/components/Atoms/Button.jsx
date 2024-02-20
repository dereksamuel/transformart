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
  const basicBtnClass = `p-3 m-3 text-base rounded ${isShadow ? "shadow-md" : ""} ${isRounded ? "rounded-full" : "rounded"} font-semibold`;
  const className = classNames(basicBtnClass, variants[variant]);
  return (
    <button className={className} {...anotherProps}>{children}</button>
  );
}
