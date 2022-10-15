import {
  FormControlLabel,
  FormLabel,
  FormGroup,
  FormControl,
  Checkbox,
  FormHelperText,
} from "@mui/material";
import React, { useEffect, useState } from "react";

interface CheckboxOptions {
  checkboxLabel: string;
  checkboxValue: string;
}

interface CustomCheckboxGroupProps {
  id: string;
  label: string;
  options: CheckboxOptions[];
  onChangeHandler?: (e: any) => any;
  isHorizontal?: boolean;
  size?: "small" | "medium";
  color?: "primary" | "secondary" | "error" | "warning" | "info" | "success";
  formHelperText?: "";
  isError?: boolean;
}

export const CustomCheckBoxGroup: React.FC<CustomCheckboxGroupProps> = ({
  id = "",
  label = "",
  options = [],
  onChangeHandler = (e: any) => {},
  isHorizontal = true,
  size = "small",
  color = "primary",
  isError = false,
  formHelperText = "",
}: CustomCheckboxGroupProps) => {
  const [values, setValue] = useState<any[]>([]);
  useEffect(() => {
    if (!options.length) {
      throw new Error("Array need to have atleast two Elements");
    }
  });

  useEffect(() => {
    onChangeHandler(values);
  }, [values]);

  return (
    <FormControl error={isError} id={id}>
      <FormLabel>{label}</FormLabel>
      <FormGroup row={isHorizontal}>
        {options.map(({ checkboxLabel, checkboxValue }) => {
          return (
            <FormControlLabel
              label={checkboxLabel}
              control={
                <Checkbox
                  value={checkboxLabel}
                  checked={values.includes(checkboxValue)}
                  size={size}
                  color={color}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    const index = values.indexOf(e.target.value);
                    if (index === -1) {
                      setValue([...values, e.target.value]);
                    } else {
                      setValue(
                        values.filter((instance) => instance != e.target.value)
                      );
                    }
                  }}
                />
              }
            />
          );
        })}
      </FormGroup>
      {isError && <FormHelperText>{formHelperText}</FormHelperText>}
    </FormControl>
  );
};
