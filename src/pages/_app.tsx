import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { trpc } from '../utils/trpc';
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

function App({ Component, pageProps }: AppProps) {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default trpc.withTRPC(App);