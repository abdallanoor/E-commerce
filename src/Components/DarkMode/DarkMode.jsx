import { useState, useEffect } from "react";

import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

export default function DarkMode() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
  );
  const element = document.documentElement;
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

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

  useEffect(() => {
    onWindowMatch();
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
        localStorage.setItem("theme", "dark");
        onWindowMatch();
        break;
    }
  }, [theme]);
  return (
    <>
      {theme === "light" ? (
        <MoonIcon
          className="h-5 cursor-pointer"
          onClick={() => setTheme("dark")}
        />
      ) : (
        <SunIcon
          className="h-5 cursor-pointer"
          onClick={() => setTheme("light")}
        />
      )}
    </>
  );
}
