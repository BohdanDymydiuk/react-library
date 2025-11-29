import React from "react";
import type { DotLottieReactProps } from "@lottiefiles/dotlottie-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { segment } from "../../constants";

export const Eye: React.FC<DotLottieReactProps> = (props) => {
  return (
    <DotLottieReact
      src="https://lottie.host/e3647be4-bc01-47aa-8ba5-3c5e8c9c0eb5/0Tsb7SPHDb.lottie"
      style={{ width: "100px", height: "100px" }}
      segment={segment.close}
      {...props}
    />
  );
};
