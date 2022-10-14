import { Button, Icon, IconButton } from "@mui/material";
import React from "react";

interface CustomButtonProps {
  id: string;
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
  isDisabled?: boolean;
}

export const CustomButton: React.FC<CustomButtonProps> = ({
  buttonText = "",
  color = "primary",
  onClickHandler = (e: React.MouseEventHandler) => {},
  id = "",
  otherProps = {},
  variant = "contained",
  size = "medium",
  endIcon = <></>,
  startIcon = <></>,
  isIconButton = false,
  Icon = <></>,
  isDisabled = false,
}: CustomButtonProps) => {
  return isIconButton ? (
    <IconButton disabled={isDisabled} id={id} aria-label={buttonText}>
      {Icon}
    </IconButton>
  ) : (
    <Button
      {...otherProps}
      id={id}
      variant={variant}
      endIcon={endIcon}
      startIcon={startIcon}
      size={size}
      color={color}
      disabled={isDisabled}
      onClick={(e: any) => {
        onClickHandler(e);
      }}
    >
      {buttonText}
    </Button>
  );
};
