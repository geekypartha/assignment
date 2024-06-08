import React from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";

import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const navigation = [
  { name: "How to start", href: "#", current: true },
  { name: "About", href: "#", current: false },
  { name: "Review", href: "#", current: false },
  { name: "Info", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {

  const navigate = useNavigate();
  return (
    <>
      <Disclosure as="nav" className="bg-white-800">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-20 items-center justify-between">
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    <h3 className="font-jost-medium pt-1 text-xl text-blue-500 hover:text-blue-700 cursor-pointer">
                      Health-lab
                    </h3>
                  </div>
                  <div className="hidden px-72 sm:ml-6 sm:block">
                    <div className="flex gap-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? " text-black-300 text-xl hover:text-gray-300"
                              : "text-black-300 text-xl  hover:text-gray-300",
                            " px-3 py-2 text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex gap-3 font-jost-medium text-blue-500 hover:text-blue-700">
                  <button onClick={()=>navigate('/login')} className="px-5 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-200 hover:text-blue-900">Login</button>
                 
                </div>
              </div>
            </div>

            <DisclosurePanel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <DisclosureButton
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </DisclosureButton>
                ))}
              </div>
            </DisclosurePanel>
          </>
        )}
      </Disclosure>
    </>
  );
};

export default Navbar;
