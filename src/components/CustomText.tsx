import React from "react";

const CustomText = ({
  children,
  className,
  ...props
}: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>) => {
  return (
    <p {...props} className={`leading-7 ${className} md:leading-9`}>
      {children}
    </p>
  );
};

export default CustomText;
