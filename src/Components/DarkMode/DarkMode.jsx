import React, { useContext, useState, useEffect } from "react";

import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

export default function DarkMode() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
  );
  const element = document.documentElement;
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
  console.log(darkQuery);
  let sun = SunIcon;
  let Moon = MoonIcon;
  const options = [
    {
      icon: sun,
      text: "light",
    },
    {
      icon: Moon,
      text: "dark",
    },
  ];

  function onWindowMatch() {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && darkQuery.matches)
    ) {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  }
  onWindowMatch();

  const lang = localStorage.getItem("theme");
  useEffect(() => {
    switch (theme) {
      case "dark":
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;
      case "light":
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;
      default:
        localStorage.setItem("theme", "light");
        onWindowMatch();
        break;
    }
  }, [theme]);
  return (
    <>
      {theme == "dark" ? (
        <SunIcon
          className="h-5 cursor-pointer"
          onClick={() => setTheme("light")}
        />
      ) : (
        <MoonIcon
          className="h-5 cursor-pointer"
          onClick={() => setTheme("dark")}
        />
      )}
      {/* {options.map((opt) => (
        <opt.icon
          onClick={() => setTheme(opt.text)}
          key={opt.text}
          className={`h-5 cursor-pointer" key="light text-neutral-500 hover:text-black  dark:text-neutral-400 dark:hover:text-neutral-300 `}
        />
      ))} */}
    </>
  );
}
