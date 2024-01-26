"use client";
import Section from "@/lib/Section";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import CustomInput from "../CustomInput";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const form = useRef<string | HTMLFormElement>(null);
  const sendEmail = (e) => {
    e.preventDefault();
    toast({
      title: "Message sent",
      description: "Thank you for the feedback stay sane!✨❤️",
    });
    emailjs
      .sendForm(
        "service_jwuvscj",
        "contact_form",
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
  return (
    <Section className="mt-20 ">
      <form ref={form} onSubmit={sendEmail}>
        <h1 className="text-5xl text-center font-bold">Send me a message</h1>
        <div className="flex gap-10 mt-9 ">
          <div className="flex-1">
            <CustomInput
              heading="Name"
              placeholder="Enter Name"
              className="bg-slate-100"
              name="user_name"
            />
          </div>
          <div className="flex-1">
            <CustomInput
              heading="Email"
              placeholder="Enter Email"
              name="email"
            />
          </div>
        </div>
        <div className="mt-5">
          <CustomInput
            heading="Send a message"
            placeholder="Enter your message"
            name="message"
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
