"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [counter, setCounter] = useState<number>(0);
  const [text, setText] = useState<string>("60px");
  const [yes, setYes] = useState<string>("60px");
  const [success, setSuccess] = useState<boolean>(false);

  let yesOptions: string[] = [
    "yes",
    "duh",
    "of course",
    "obviously",
    "why would I ever say no",
  ];

  let noOptions: string[] = [
    "no",
    "are you sure?",
    "i think you misclicked",
    "its alright try again",
    "????",
  ];

  const clickNo = () => {
    setCounter((prev) => prev + 1);
    setText((prev) => `${parseInt(prev) / 1.8}px`);
    setYes((prev) => `${parseInt(prev) * 1.2}px`);
  };

  return (
    <div className="flex flex-col text-center items-center bg-[#fcfaf8] w-[100vw] h-[100vh]">
      <h1 className="uppercase">Will you be my valentines</h1>
      <img className="w-[300px]" src="/gifs/cat.gif" />
      <img className={success ? "w-[300px]" : "hidden"} src="/gifs/tmp.gif" />
      <div className="min-w-[400px] justify-evenly">
        {/* {counter} */}

        {success ? null : (
          <div className="">
            <button
              className="mx-5 pulsating-text"
              onClick={() => setSuccess(true)}
              style={{ fontSize: yes }}
            >
              {counter <= 4 ? yesOptions[counter] : "YES"}
            </button>
            <button
              className={counter > 4 ? "hidden" : ""}
              style={{ fontSize: text }}
              onClick={clickNo}
            >
              {noOptions[counter]}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
