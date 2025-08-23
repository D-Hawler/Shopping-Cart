import { MouseEventHandler } from "react";

interface ButtonProps {
  className?: string;
  description: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

function Button({ className, description, onClick }: ButtonProps) {
  return (
    <button className={className} onClick={onClick}>
      {description}
    </button>
  );
}

export default Button;
