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
        label: "Pants",
        href: "/male/pants",
        isDropdown: false,
      },
      {
        label: "Jackets",
        href: "/male/jackets",
        isDropdown: false,
      },
      {
        label: "Sweaters",
        href: "/male/sweaters",
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
        label: "T-Shirts",
        href: "/male/t-shirts",
        isDropdown: false,
      },
      {
        label: "Pants",
        href: "/male/pants",
        isDropdown: false,
      },
      {
        label: "Jackets",
        href: "/male/jackets",
        isDropdown: false,
      },
      {
        label: "Dresses",
        href: "/male/dresses",
        isDropdown: false,
      },
      {
        label: "Sweaters",
        href: "/male/sweaters",
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
