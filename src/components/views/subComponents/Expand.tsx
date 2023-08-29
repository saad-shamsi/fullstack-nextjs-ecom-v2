import { NavBarItemType } from "@/components/utils/NavBarAndTypes";
import Link from "next/link";
import React, { FC } from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";
const Expand: FC<{ item: NavBarItemType }> = ({ item }) => {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <li
      className={`${
        open && item.isDropdown ? "h-44" : "h-12"
      }   duration-300 list-none`}
    >
      <div
        onClick={handleClick}
        className="hover:bg-yellow-300 duration-300 rounded-md py-2 px-3 cursor-pointer flex justify-between "
      >
        <Link href={item.href}>{item.label}</Link>
        {item.isDropdown && (
          <MdOutlineArrowDropDown
            className={
              !open && `mt-1 -rotate-180 hover:rotate-0 duration-300 group`
            }
          />
        )}
      </div>
      <div className="flex flex-col space-y-2">
        {open &&
          item.dropdownData?.map((subItem: NavBarItemType, index: number) => (
            <li
              key={index}
              className="list-none  flex  items-center justify-between  translate-y-6 group-hover:translate-y-0 px-5 duration-300"
            >
              <Link
                className="hover:bg-cyan-50 hover:ml-1 hover:duration-300 font-light w-full rounded"
                href={subItem.href}
              >
                {subItem.label}
              </Link>
            </li>
          ))}
      </div>
    </li>
  );
};

export default Expand;
