"use client";
import Section from "@/lib/Section";
import React, { useState } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import CustomInput from "../CustomInput";
const Contact = () => {
  const inputElement = useRef();
  const form = useRef();

  const [input, setInput] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jwuvscj",
        "template_uoe49eg",
        form.current,
        "cpxpcxcPA_7QFoEFQ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
  };
  return (
    <Section className="mt-20 ">
      {/* <div className="flex flex-col items-center">
        <h1 className="text-5xl font-bold text-center border-b-2 border-white">
          Send me a message!
        </h1>
        <p className="text-xl mt-3 text-center">
          Got a question or proposal, or just want to say hello? Go ahead.
        </p>
      </div>
      <form
        className=" flex flex-col items-center  gap-4 mt-5 "
        onSubmit={handleSubmit}
      >
        <div className="flex gap-6">
          <div className="flex flex-col flex-1  w-full">
            <CustomInput heading="Your Name" placeholder="Name" />
          </div>
          <div className="flex flex-col flex-1">
            <CustomInput heading="Email" placeholder="Email" />
          </div>
        </div>
        <div className="flex flex-col w-full">
          <CustomInput heading="Your Message" placeholder="Enter Message" />
        </div>
        <button className="bg-green-600 w-1/2 p-2 py-4  font-semibold">
          HMU!
        </button>
      </form> */}
      <form ref={form} onSubmit={sendEmail}>
        <h1 className="text-5xl text-center font-bold">Send me a message</h1>
        <div className="flex gap-10 mt-9 ">
          <div className="flex-1">
            <CustomInput
              heading="Name"
              placeholder="Enter Name"
              className="bg-slate-100"
            />
          </div>
          <div className="flex-1">
            <CustomInput heading="Email" placeholder="Enter Email" />
          </div>
        </div>
        <div className="mt-5">
          <CustomInput
            heading="Send a message"
            placeholder="Enter your message"
          />
        </div>
        <div className="flex justify-center mt-5">
          <button className="border border-purple-500 w-[150px] rounded-lg p-2 py-4 absolute z-10 hover:translate-x-1  hover:-translate-y-2 transition-transform bg-black ">
            HMU!
          </button>
          <button
            className="border  w-[150px] rounded-lg p-2 py-4 "
            onClick={sendEmail}
          >
            HMU!
          </button>
        </div>
      </form>
    </Section>
  );
};

export default Contact;
