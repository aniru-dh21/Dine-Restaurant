import React from "react";
import BookContainer from "./components/BookContainer";
import Characteristics from "./components/Characteristics";
import MainContainer from "./components/MainContainer";
import Rectangle from "./components/Rectangle";
import Events from "./components/events/Events";
import Highlights from "./components/highlights/Highlights";

export default function Home() {
  return (
    <main>
      <MainContainer />
      <Rectangle className="left-0 mt-[100px] rounded-tr-[100px] max-md:w-[300px] md:mt-[250p] max-xl:md:w-[75%]" />
      <Rectangle className="right-0 mt-[1170px] rounded-tl-[100px] max-md:w-[300px] md:mt-[1091px] max-xl:md:w-[75%]" />
      <Characteristics />
      <Highlights />
      <Rectangle className="left-0 w-[545px] rounded-tr-[100px]" />
      <Events />
      <BookContainer />
    </main>
  );
}
