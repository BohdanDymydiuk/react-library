import React from "react";
import { Button } from "../../components/ui/Button";
import { Cross } from "../../components/ui/Cross";
import type { DotLottie } from "@lottiefiles/dotlottie-react";

interface Props {
  clear: (event: React.ChangeEvent<HTMLInputElement>) => void;
  ref: React.RefObject<DotLottie | null>;
}

export const ClearButton: React.FC<Props> = ({ clear, ref }) => {
  return (
    <Button onClick={clear}>
      <Cross
        dotLottieRefCallback={(dotLottie) => {
          ref.current = dotLottie;
        }}
      />
    </Button>
  );
};
