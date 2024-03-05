import "@/assets/fonts/stylesheet.css";
import "./globals.css";
import FilterBg from "@/components/Atoms/FilterBg";

export default function App({ Component, pageProps }) {
  return (
    <>
      <FilterBg />
      <Component {...pageProps} />
    </>
  )
}
