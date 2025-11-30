import React from "react";

interface ArrowProps {
  className?: string;
}

export const Arrow: React.FC<ArrowProps> = ({ className }) => {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24">
      <path
        d="m16.707 13.293-4-4a1 1 0 0 0-1.414 0l-4 4A1 1 0 0 0 8 15h8a1 1 0 0 0 .707-1.707z"
        fill="#ff8e31"
        data-name="Up"
      />
    </svg>
  );
};
