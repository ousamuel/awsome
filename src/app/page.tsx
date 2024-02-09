"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [counter, setCounter] = useState<number>(0);
  const [text, setText] = useState<string>("60px");
  const [yes, setYes] = useState<string>("60px");
  const [success, setSuccess] = useState<boolean>(false);
  const [slide, setSlide] = useState<boolean>(false);

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
    setText((prev) => `${parseInt(prev) / 1.6}px`);
    setYes((prev) => `${parseInt(prev) * 1.1}px`);
  };

  const slideDown = () => {
    setSlide(true);
  };

  return (
    <div className="flex flex-col text-center items-center bg-[#fcfaf8] w-[100vw] h-[100vh]">
      <img
        id="slider"
        className={slide ? "her slide-in" : ""}
        src="her.png"
        alt="logo"
        width={220}
      />
      <img
        id="slider"
        className={slide ? "her2 slide-in2" : ""}
        src="her2.png"
        alt="logo"
        width={220}
      />
      <h1 className="uppercase text-[40px] text-rose-500">
        Angela Wu, Will you be my valentines?
      </h1>
      <img className="w-[300px]" src="/gifs/cat.gif" />
      <div className={success ? "flex" : "hidden"}>
        <img className="w-[300px]" src="/gifs/tmp.gif" />
        <img
          className={
            slide
              ? "hidden"
              : "w-[100px] h-[100px] rounded-full cursor-pointer hover:bg-red-400 "
          }
          onClick={() => setSlide((prev) => !prev)}
          src="/svgs/arrow-down.svg"
        />
      </div>

      <div className="min-w-[400px] justify-evenly">
        {/* {counter} */}

        {success ? null : (
          <div className="flex flex-col">
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
