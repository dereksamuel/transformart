import styles from "./css/wave-body.module.css";

export default function WaveBody({ children }) {
  return (
    <div className={`p-5 ${styles["wave-body"]}`}>{children}</div>
  );
}
