import { useState } from "react";
import { keys } from "../lib/keys";

export const Keyboard = () => {
  const [pressedKey, setPressedKey] = useState();
  return (
    <div>
      <div className="pb-12">
        {pressedKey
          ? `you pressed "${pressedKey}" here is some info in it...........`
          : "click on a key"}
      </div>
      <div className="grid grid-cols-8 grid-rows-10 gap-1">
        {keys.map(
          (
            {
              none,
              val,
              col,
              row,
              colStart = "auto",
              rowStart = "auto",
              classNames = ""
            },
            ndx
          ) =>
            !none ? (
              <div
                key={ndx}
                onClick={() => setPressedKey(val)}
                className={`col-span-${col} row-span-${row} col-start-${colStart} row-start-${rowStart} bg-blue-300 border border-gray-700 p-4 flex justify-center items-center ${classNames}`}
              >
                {val}
              </div>
            ) : (
              <div
                key={ndx}
                className={`col-span-${col} row-span-${row} col-start-${colStart} row-start-${rowStart}`}
              />
            )
        )}
      </div>
    </div>
  );
};
