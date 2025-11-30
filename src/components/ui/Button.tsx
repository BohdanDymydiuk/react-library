import React from "react";

interface ButtonProps {
  [key: string]: unknown;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: 0,
      }}
      {...props}
    >
      {children}
    </button>
  );
};
