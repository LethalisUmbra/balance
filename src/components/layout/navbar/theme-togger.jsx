import { useTheme } from "@/hooks/theme";
import { IconMoonFilled, IconSunFilled } from "@tabler/icons-react";
import { twMerge } from "tailwind-merge";

export default function ThemeTogger() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    console.log("Togglin theme");
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className='flex items-center'>
      <label className='inline-flex items-center cursor-pointer'>
        <input
          type='checkbox'
          checked={theme === "dark"}
          onChange={toggleTheme}
          className='sr-only peer'
        />
        <div
          className={twMerge(
            "relative w-14 h-8 rounded-full",
            "peer-focus:outline-none peer-focus:ring-4",
            "bg-yellow-200 dark:bg-sky-700 bg-opacity-50",
            "peer-focus:ring-yellow-300 dark:peer-focus:ring-sky-800"
          )}
        >
          <div
            className={twMerge(
              "absolute top-[2px] left-[2px] dark:-left-[2px] h-7 w-7 rounded-full",
              "flex items-center justify-center transition-transform duration-300",
              "bg-yellow-300 dark:bg-sky-400 dark:translate-x-full"
            )}
          >
            {theme === "light" ? (
              <IconSunFilled size={20} className='text-white' />
            ) : (
              <IconMoonFilled size={20} className='text-white' />
            )}
          </div>
        </div>
      </label>
    </div>
  );
}
