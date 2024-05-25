import Image from "next/image";
import { Inter } from "next/font/google";
import ReviewPage from "@/components/ReviewPage";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <h1 className="font-bold text-center">Review Page</h1>
      <ReviewPage />
    </>
  );
}
