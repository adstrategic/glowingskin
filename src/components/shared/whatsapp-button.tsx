import Image from "next/image";
import React from "react";
import whatsapp from "@/assets/images/whatsapp.svg";

const WhatsappButton = () => {
  return (
    <div className="z-20 fixed bottom-5 right-5">
      <a href="https://api.whatsapp.com/send?phone=19542257085">
        <span className="sr-only">contact via WhatsApp</span>
        <Image src={whatsapp} width={60} height={60} alt="" />
      </a>
    </div>
  );
};

export default WhatsappButton;
