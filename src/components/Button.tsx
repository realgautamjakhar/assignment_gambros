import React, {
  ButtonHTMLAttributes,
  ReactNode,
  AnchorHTMLAttributes,
} from "react";
import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";

type ButtonBaseProps = VariantProps<typeof buttonClasses> & {
  children: ReactNode;
};

interface ButtonAsButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: never;
}
interface ButtonAsAnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}
type ButtonProps = ButtonBaseProps &
  (ButtonAsAnchorProps | ButtonAsButtonProps);
const buttonClasses = cva(
  "rounded-[10px] font-Inter hover:opacity-80 duration-300 ease-in-out inline-flex items-center",
  {
    variants: {
      variant: {
        primary: "bg-brandGradient text-white",
        gradient: "text-transparent bg-brandGradient bg-clip-text",
        tertiary: "",
      },
      size: {
        medium: " py-2 px-4 text-base",
        large: " md:py-3 md:px-5 py-2 px-4 text-sm md:text-lg  ",
        small: "py-1.5 px-4 text-sm",
      },
    },
    defaultVariants: {
      variant: "tertiary",
    },
  }
);

const Button = ({ children, variant, size, color, ...props }: ButtonProps) => {
  const classes = buttonClasses({ variant, size, className: props.className });
  if ("href" in props && props.href !== undefined) {
    return (
      <Link {...props} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <button {...props} className={classes}>
      {children}
    </button>
  );
};

export default Button;
