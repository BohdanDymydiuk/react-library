import {
  DotLottieReact,
  type DotLottieReactProps,
} from "@lottiefiles/dotlottie-react";
import type React from "react";

export const Cross: React.FC<DotLottieReactProps> = (props) => {
  return (
    <DotLottieReact
      src="https://lottie.host/9c9267d0-2c0f-407d-9324-8e8f4ff335ff/34imMqLtdx.lottie"
      style={{ width: "25px", height: "25px" }}
      {...props}
    />
  );
};
