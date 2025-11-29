import React, { useState, useEffect, useRef } from "react";

import { Eye } from "./eye";
import type { DotLottie } from "@lottiefiles/dotlottie-react";
import { segment } from "../../constants";

export interface InputProps {
  /** Input type */
  type: "text" | "password" | "number";
  /** Is the input clearable */
  clearable: boolean;
}

export const Input: React.FC<InputProps> = ({ type = "text", clearable }) => {
  const [value, setValue] = useState("");
  const [visible, setVisible] = useState(false);
  const dotLottieRef = useRef<DotLottie | null>(null);

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const visibilityToggleHandler = () => {
    setVisible(!visible);
  };

  const clearHandler = () => {
    setValue("");
  };

  useEffect(() => {
    if (visible) {
      dotLottieRef.current?.setMode("bounce");
      dotLottieRef.current?.setSegment(...segment.open);
    } else {
      dotLottieRef.current?.setMode("reverse");
      dotLottieRef.current?.setSegment(...segment.close);
    }

    dotLottieRef.current?.setLoopCount(1);
    dotLottieRef.current?.play();
  }, [visible]);

  return (
    <div>
      <input
        type={visible ? "text" : type}
        value={value}
        onChange={onChangeHandler}
      />
      {clearable && <button onClick={clearHandler}>Clear</button>}
      {type === "password" && (
        <button onClick={visibilityToggleHandler}>
          <Eye
            dotLottieRefCallback={(dotLottie) => {
              dotLottieRef.current = dotLottie;
            }}
          />
        </button>
      )}
    </div>
  );
};
