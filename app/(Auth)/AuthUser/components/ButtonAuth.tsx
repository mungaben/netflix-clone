"use client";

import { Button, buttonVariants } from "@/components/ui/button";
import React from "react";
type ButtonVariant = "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";

interface ButtonAuthProps {
    variant?: ButtonVariant;
    label:string
}

const ButtonAuth:React.FC<ButtonAuthProps> = (
    {
        variant,
        label
    }
) => {
  return (
    <>

      <Button className={`w-full hover:bg-red-500`} variant={variant}>
        {label}
      </Button>
    </>
  );
};

export default ButtonAuth;
