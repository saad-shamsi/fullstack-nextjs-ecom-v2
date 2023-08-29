import React, { FC } from "react";

const Wrapper: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className=" mx-auto px-4 md:px-8 max-w-[1440px]">{children}</div>;
};

export default Wrapper;
