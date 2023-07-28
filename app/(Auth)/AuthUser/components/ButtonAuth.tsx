"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import { Icon } from "next/dist/lib/metadata/types/metadata-types";
import React from "react";
type ButtonVariant = "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
interface IconTypeProps {
  width?: number;
  height?: number;
  color?: string;
  size?:number;
}

type IconType = (props: IconTypeProps) => JSX.Element;
interface ButtonAuthProps {
    variant?: ButtonVariant;
    label:string
    onClick?: () => void;
    width?:boolean
    icon?:IconType
}

const ButtonAuth:React.FC<ButtonAuthProps> = (
    {
        variant,
        label,
        onClick,
        width,
        icon: IconComponent, // Renamed to avoid conflict with Icon type

    }
) => {
  return (
    <>

      <Button onClick={onClick} className={`${width ? "w-full":""} hover:bg-red-500 flex flex-row gap-3`} variant={variant}>
      {IconComponent && <IconComponent  size={25} color="gray"/>} {label}
      </Button>
    </>
  );
};

export default ButtonAuth;
