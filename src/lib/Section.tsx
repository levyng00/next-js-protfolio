import React, { CSSProperties, ReactNode } from "react";

type sectionType = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};
const Section = ({ children, className, style, ...props }: sectionType) => {
  return (
    <section
      {...props}
      className={`max-w-screen-7xl  mx-auto  px-6 py-4 ${className} `}
      style={style}
    >
      {children}
    </section>
  );
};

export default Section;
