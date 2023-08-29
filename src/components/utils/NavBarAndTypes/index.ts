export interface NavBarItemType {
  label: string;
  href: string;
  isDropdown: boolean;
  dropdownData?: NavBarItemType[];
}

export const NavBarArray: NavBarItemType[] = [
  {
    label: "Male",
    href: "/male",
    isDropdown: true,
    dropdownData: [
      {
        label: "Shirts",
        href: "/male/shirts",
        isDropdown: false,
      },
      {
        label: "Pents",
        href: "/male/pents",
        isDropdown: false,
      },
      {
        label: "Jackets",
        href: "/male/jackets",
        isDropdown: false,
      },
      {
        label: "Ties",
        href: "/male/ties",
        isDropdown: false,
      },
    ],
  },
  {
    label: "Female",
    href: "/female",
    isDropdown: true,
    dropdownData: [
      {
        label: "Shirts",
        href: "/male/shirts",
        isDropdown: false,
      },
      {
        label: "Pents",
        href: "/male/pents",
        isDropdown: false,
      },
      {
        label: "Jackets",
        href: "/male/jackets",
        isDropdown: false,
      },
      {
        label: "Dresses",
        href: "/male/dress",
        isDropdown: false,
      },
    ],
  },
  {
    label: "Kids",
    href: "/kids",
    isDropdown: false,
  },
  {
    label: "All Products",
    href: "/male",
    isDropdown: false,
  },
];
