import Image from "next/image";
import React from "react";
import Load from "@/assets/images/loader.gif";

const Loading = () => {
  return (
    <Image
      src={Load}
      width={0}
      height={0}
      sizes="100vw"
      quality={100}
      className={`w-[100%] h-[calc(100%-120px)]`}
      alt="loading"
    />
  );
};

export default Loading;
