"use client";
import Section from "@/lib/Section";
import React, { useState } from "react";
type customInput = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  heading: string;
};

const CustomInput = ({
  className,
  heading,
  title,
  placeholder,
  ...props
}: customInput) => {
  const [isFocussed, setIsFocussed] = useState(false);
  const handleFocus = () => {
    setIsFocussed(true);
  };
  const handleBlur = () => {
    setIsFocussed(false);
  };
  return (
    <div className="flex flex-col">
      <label
        className="mb-2"
        style={{ color: isFocussed ? " purple" : "white" }}
      >
        {heading}
      </label>
      <input
        {...props}
        className={` py-2 bg-transparent border-b-2  outline-none  ${
          isFocussed ? "border-blue-500" : ""
        }`}
        placeholder={isFocussed ? "" : placeholder}
        onFocus={handleFocus}
        style={{
          borderBottom: isFocussed ? "1px solid purple" : "1px solid white",
        }}
        onBlur={handleBlur}
      />
    </div>
  );
};

export default CustomInput;
