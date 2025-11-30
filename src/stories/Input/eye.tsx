import React from "react";
import type { DotLottieReactProps } from "@lottiefiles/dotlottie-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { segment } from "../../constants";

export const Eye: React.FC<DotLottieReactProps> = (props) => {
  return (
    <DotLottieReact
      src="https://lottie.host/a4eeecb2-2cbf-4e19-b5ed-a97897b9298e/avauTsgtjK.lottie"
      style={{ width: "35px", height: "35px" }}
      segment={segment.close}
      {...props}
    />
  );
};
