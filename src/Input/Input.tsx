import React, { useState, useEffect, useRef } from "react";

import type { DotLottie } from "@lottiefiles/dotlottie-react";
import { crossSegment, eyeSegment } from "../shared/constants";
import "./input.css";
import { ClearButton } from "./components/ClearButton";
import { VisibilityButton } from "./components/VisibilityButton";
import { ArrowsButtons } from "./components/ArrowsButtons";

export interface InputProps {
  /** Input type */
  type: "text" | "password" | "number";
  /** Is the input clearable */
  clearable: boolean;
}

export const Input: React.FC<InputProps> = ({ type = "text", clearable }) => {
  // type checker
  const isText = type === "text";
  const isPass = type === "password";
  const isNum = type === "number";

  // states and refs
  const [text, setText] = useState("");
  const [pass, setPass] = useState("");
  const [num, setNum] = useState("");
  const [visible, setVisible] = useState(false);
  const eyeRef = useRef<DotLottie | null>(null);
  const crossRef = useRef<DotLottie | null>(null);

  // handlers
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const v = event.target.value;
    if (isText) setText(v);
    if (isPass) setPass(v);
    if (isNum) setNum(v.length > 1 && v[0] === "0" ? v.slice(1) : v);
  };

  const visibilityToggleHandler = () => {
    if (!visible) setTimeout(() => setVisible(true), 100);
    if (visible) setVisible(false);
  };

  const clearHandler = () => {
    setTimeout(() => {
      if (isText) setText("");
      if (isPass) setPass("");
      if (isNum) setNum("");
    }, 100);
    crossRef.current?.setSegment(...crossSegment.start);
    crossRef.current?.play();
  };

  const plusHandler = () => setNum((value) => String(+value + 1));
  const minusHandler = () => setNum((value) => String(+value - 1));

  // useEffects
  useEffect(() => {
    if (eyeRef.current?.currentFrame === 0) return;
    if (visible) {
      eyeRef.current?.setMode("bounce");
      eyeRef.current?.setSegment(...eyeSegment.open);
    } else {
      eyeRef.current?.setMode("reverse");
      eyeRef.current?.setSegment(...eyeSegment.close);
    }
    eyeRef.current?.setLoopCount(1);
    eyeRef.current?.play();
    return () => setVisible(false);
  }, [visible, type]);

  return (
    <div className="input-container">
      <input
        type={visible ? "text" : type}
        value={(isText && text) || (isPass && pass) || (isNum && num) || ""}
        onChange={onChangeHandler}
      />

      {clearable && <ClearButton clear={clearHandler} ref={crossRef} />}

      {isPass && (
        <VisibilityButton
          visibilityToggle={visibilityToggleHandler}
          ref={eyeRef}
        />
      )}

      {isNum && <ArrowsButtons plus={plusHandler} minus={minusHandler} />}
    </div>
  );
};
