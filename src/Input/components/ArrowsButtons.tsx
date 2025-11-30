import React from "react";
import { Arrow } from "../../components/ui/Arrow";
import { Button } from "../../components/ui/Button";
import "../arrows.css";

interface Props {
  plus: () => void;
  minus: () => void;
}

export const ArrowsButtons: React.FC<Props> = ({ plus, minus }) => {
  return (
    <div className="arrows-container">
      <Button onClick={plus}>
        <Arrow className="arrow" />
      </Button>

      <Button onClick={minus}>
        <Arrow className="arrow" />
      </Button>
    </div>
  );
};
