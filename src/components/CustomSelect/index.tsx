import { TextField, MenuItem } from "@mui/material";
import React, { useEffect, useState } from "react";
interface OptionsArray {
  optionLabel: string;
  optionValue: string;
}

interface CustomSelectProps {
  id: string;
  variant?: "outlined" | "filled" | "standard";
  label: string;
  size?: "small" | "medium";
  color?: "primary" | "secondary" | "error" | "warning" | "info" | "success";
  isRequired?: boolean;
  helperText?: string;
  type?: "text" | "password" | "number";
  isDisabled?: boolean;
  selectProps?: {};
  onChangeHandler?: (e: any) => any;
  otherProps?: {};
  isError?: boolean;
  optionsArray: OptionsArray[];
  isMultiSelect?: boolean;
}

export const CustomSelect: React.FC<CustomSelectProps> = ({
  id = "",
  variant = "outlined",
  label = "",
  size = "medium",
  color = "primary",
  isDisabled = false,
  isRequired = false,
  helperText = "",
  type = "text",
  selectProps = {},
  otherProps = {},
  optionsArray = [],
  onChangeHandler = (e: any) => {},
  isError = false,
  isMultiSelect = false,
}: CustomSelectProps) => {
  useEffect(() => {
    if (!optionsArray.length) {
      throw new Error("Array should contain atleat on element");
    }
  }, [optionsArray]);
  const [value, setValue] = useState<any>(isMultiSelect ? [] : "");

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
      SelectProps={{ multiple: isMultiSelect, ...selectProps }}
      error={isError}
      value={value}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setValue(typeof value === "string" ? value.split(",") : value);
        onChangeHandler(value);
      }}
      select
      fullWidth
      {...otherProps}
    >
      {optionsArray.map((instance,index) => {
        const { optionLabel = "", optionValue = "" } = instance;
        return <MenuItem   key={`${index}_${id}`} value={optionValue}>{optionLabel}</MenuItem>;
      })}
    </TextField>
  );
};
