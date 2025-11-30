import React from "react";
import { Eye } from "../../components/ui/Eye";
import type { DotLottie } from "@lottiefiles/dotlottie-react";
import { Button } from "../../components/ui/Button";

interface Props {
  visibilityToggle: () => void;
  ref: React.RefObject<DotLottie | null>;
}

export const VisibilityButton: React.FC<Props> = ({
  visibilityToggle,
  ref,
}) => {
  return (
    <Button onClick={visibilityToggle}>
      <Eye
        dotLottieRefCallback={(dotLottie) => {
          ref.current = dotLottie;
        }}
      />
    </Button>
  );
};
