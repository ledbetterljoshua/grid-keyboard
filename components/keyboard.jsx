import { useState, useRef, useEffect } from "react";
import classnames from "classnames";
import { keys } from "../lib/keys";

export const Keyboard = () => {
  const [pressedKey, setPressedKey] = useState({});

  const handleKeyDown = e => {
    e.keyCode === 9 && e.preventDefault();
    const found = keys.find(key => key.keyCode === e.keyCode);
    if (!found) return;

    setPressedKey(found);
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div>
      <div className="pb-12">
        {pressedKey
          ? `you pressed "${pressedKey.val}" here is some info in it...........`
          : "click on a key"}
      </div>
      <div className="grid grid-cols-8 grid-rows-10 gap-1">
        {keys.map((keyboardKey, ndx) => {
          const {
            none,
            val,
            col = 1,
            row = 2,
            colStart = "auto",
            rowStart = "auto",
            classNames = "",
            keyCode
          } = keyboardKey;
          const active = keyCode === pressedKey.keyCode;
          return !none ? (
            <button
              key={ndx}
              autoFocus={active}
              onClick={() => setPressedKey(keyboardKey)}
              className={classnames(
                `col-span-${col} row-span-${row} col-start-${colStart} row-start-${rowStart} hover:bg-gray-400 outline-none cursor-pointer px-1 py-2 md:p-4 flex justify-center items-center rounded-sm ${classNames}`,
                {
                  "bg-gray-400 border border-blue-500 shadow-outline": active,
                  "bg-gray-200 border border-gray-500": !active
                }
              )}
            >
              {val}
            </button>
          ) : (
            <div
              key={ndx}
              className={`col-span-${col} row-span-${row} col-start-${colStart} row-start-${rowStart}`}
            />
          );
        })}
      </div>
    </div>
  );
};
