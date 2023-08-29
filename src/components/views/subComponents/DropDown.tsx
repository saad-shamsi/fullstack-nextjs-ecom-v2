import { NavBarItemType } from "@/components/utils/NavBarAndTypes";
import Link from "next/link";
import React, { FC } from "react";

const DropDown: FC<{ item: NavBarItemType }> = ({ item }) => {
  return (
    <div>
      {item.dropdownData?.map((data: NavBarItemType, index: number) => (
        <li
          key={index}
          className="hover:ml-1 duration-300 group-hover:duration-300 -translate-y-6 group-hover:translate-y-0"
        >
          <Link href={data.href}>{data.label}</Link>
        </li>
      ))}
    </div>
  );
};

export default DropDown;
