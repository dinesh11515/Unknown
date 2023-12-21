import Image from "next/image";
import { useState } from "react";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { BsPlusCircleDotted } from "react-icons/bs";
import { BiSolidDashboard } from "react-icons/bi";
import Wrapper from "@/components/Wrapper";
import Stream from "@/components/Stream";
import { useRouter } from "next/router";
export default function App() {
  const [text, setText] = useState("All Streams");
  const [wrap, setWrap] = useState(false);
  const [send, setSend] = useState(false);
  const [connected, setConnected] = useState(false);
  const [account, setAccount] = useState("");
  const router = useRouter();
  async function connect() {
    if (window.fuel) {
      try {
        await window.fuel.connect();
        const [account] = await window.fuel.accounts();
        setAccount(account);
        setConnected(true);
      } catch (err) {
        console.log("error connecting: ", err);
      }
    }
  }
  return (
    <div className="">
      <div className="flex px-20 desktop:px-40 py-4  items-center justify-between gap-1 border-b-[2px] border-black">
        <button
          className="flex  text-4xl items-center gap-1 "
          onClick={() => router.push("/")}
        >
          <Image src="/stream.ico" width={45} height={14} alt="logo"></Image>
          <p className="font-['Anton'] tracking-widest uppercase">Unknown</p>
        </button>
        {!connected ? (
          <button
            className="bg-[#1db227] hover:bg-green-500 tracking-wide text-[22px] px-10 py-3 rounded-full text-white"
            onClick={connect}
          >
            Connect Wallet
          </button>
        ) : (
          <p className="bg-[#1db227] hover:bg-green-500 tracking-wide text-[22px] px-10 py-3 rounded-full text-white">
            {account.slice(0, 6) + "..." + account.slice(-8)}
          </p>
        )}
      </div>
      <div className="px-20  desktop:px-40 py-6">
        <p className="text-[30px]">{text}</p>
        <div className="flex gap-20 border-[2px] border-black  px-6 py-4 mt-6 text-gray-500">
          <button
            className={`flex gap-2 items-center text-2xl tracking-wider  ${
              wrap && "text-black"
            }`}
            onClick={() => {
              setWrap(true);
              setSend(false);
              setText("Wrap / UnWrap");
            }}
          >
            <BsPlusCircleDotted /> Wrap / UnWrap
          </button>
          <button
            className={`flex gap-2 items-center text-2xl tracking-wider  ${
              send && "text-black"
            }`}
            onClick={() => {
              setSend(true);
              setWrap(false);
              setText("Send Stream");
            }}
          >
            <BsFillArrowUpRightCircleFill /> Send Stream
          </button>
        </div>
        {wrap && <Wrapper connected={connected} connect={connect} />}
        {send && <Stream connected={connected} connect={connect} />}
      </div>
    </div>
  );
}
