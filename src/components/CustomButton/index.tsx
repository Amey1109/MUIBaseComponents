import { Button, Icon, IconButton } from "@mui/material";
import React from "react";

interface CustomButtonProps {
  buttonText: string;
  color?: "primary" | "secondary" | "error" | "warning" | "info" | "success";
  onClickHandler?: (e: React.MouseEventHandler) => void;
  otherProps?: {};
  variant?: "text" | "contained" | "outlined";
  size?: "small" | "large" | "medium";
  isIconButton?: boolean;
  endIcon?: any;
  startIcon?: any;
  Icon?: any;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  buttonText = "",
  color = "primary",
  onClickHandler = (e: React.MouseEventHandler) => {},
  otherProps = {},
  variant = "contained",
  size = "medium",
  endIcon = <></>,
  startIcon = <></>,
  isIconButton = false,
  Icon = <></>,
}: CustomButtonProps) => {
  return isIconButton ? (
    <IconButton aria-label={buttonText}>{Icon}</IconButton>
  ) : (
    <Button
      {...otherProps}
      variant={variant}
      endIcon={endIcon}
      startIcon={startIcon}
      size={size}
      color={color}
      onClick={(e: any) => {
        onClickHandler(e);
      }}
    >
      {buttonText}
    </Button>
  );
};
