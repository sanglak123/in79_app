import WrapFooter from "@/components/footer";
import WrapHeader from "@/components/header";
import { CartProvider } from "@/hook/useCart";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <WrapHeader />
      <Component {...pageProps} />
      <WrapFooter />
      <Toaster position="top-right" />
    </CartProvider>
  );
}
