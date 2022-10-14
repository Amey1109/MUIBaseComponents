import { TextField } from "@mui/material";
import { useState } from "react";

interface CustomTextFieldProps {
  id: string;
  variant?: "outlined" | "filled" | "standard";
  label: string;
  size?: "small" | "medium";
  color?: "primary" | "secondary" | "error" | "warning" | "info" | "success";
  isRequired?: boolean;
  helperText?: string;
  type?: "text" | "password" | "number";
  isDisabled?: boolean;
  inputProps?: {};
  onChangeHandler?: (e: any) => any;
  otherProps?: {};
  isError?: boolean;
}

export const CustomTextField: React.FC<CustomTextFieldProps> = ({
  id = "",
  variant = "outlined",
  label = "",
  size = "medium",
  color = "primary",
  isDisabled = false,
  isRequired = false,
  helperText = "",
  type = "text",
  inputProps = {},
  otherProps = {},
  onChangeHandler = (e: any) => {},
  isError = false,
}: CustomTextFieldProps) => {
  const [value, setValue] = useState("");
  return (
    <TextField
      id={id}
      label={label}
      variant={variant}
      color={color}
      size={size}
      type={type}
      disabled={isDisabled}
      required={isRequired}
      helperText={helperText}
      InputProps={{ ...inputProps }}
      error={isError}
      onChange={(e) => {
        setValue(e.target.value);
        onChangeHandler(e.target.value);
      }}
      value={value}
      {...otherProps}
    />
  );
};
