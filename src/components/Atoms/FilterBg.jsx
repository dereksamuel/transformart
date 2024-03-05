import styles from "./css/filter-bg.module.css";

export default function FilterBg() {
  return (
    <>
      <div className={`fixed inset-0 ${styles["filter-bg"]}`}></div>
      <div className={`fixed inset-0 ${styles["bg-solid"]}`}></div>
    </>
  );
}
