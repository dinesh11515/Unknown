import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Unknown Protocol</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/stream.ico" />
      </Head>
      <div className="mx-40  desktop:mx-60 ">
        <button
          className="flex  text-4xl my-10 items-center gap-3"
          onClick={() => router.push("/")}
        >
          <Image src="/stream.ico" width={45} height={14} alt="logo"></Image>
          <p className="font-['Anton'] tracking-widest uppercase">Unknown</p>
        </button>
        <div className="flex mt-20 items-center justify-between">
          <div className="flex flex-col w-[550px]">
            <div>
              <p className="font-sans font-bold	 text-[72px]">Stream money</p>
              <p className="font-bold text-[72px]">every second privately.</p>
            </div>
            <div>
              <p className="text-[18px] text-[#414141] mt-5">
                Unknown protocol is a revolutionary private asset streaming
                protocol that brings subscriptions, salaries, vesting, and
                rewards to DAOs worldwide without revealing the amounts.
              </p>
            </div>
            <div>
              <button
                className="bg-yellow-500 hover:bg-yellow-300 font-bold text-[18px] px-10 py-3 mt-10 rounded-full"
                onClick={() => router.push("/app")}
              >
                Launch App
              </button>
            </div>
          </div>
          <Image
            src="/money_stream.gif"
            width={800}
            height={600}
            alt="logo"
          ></Image>
        </div>
      </div>
    </>
  );
}
