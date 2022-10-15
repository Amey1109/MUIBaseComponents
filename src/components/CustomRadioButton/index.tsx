import {
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
import React, { useEffect, useState } from "react";

interface RadioOptions {
  radioLabel: string;
  radioValue: string;
}

interface CustomRadioButtonProps {
  id: string;
  label: string;
  options: RadioOptions[];
  onChangeHandler?: (e: any) => any;
  size?: "small" | "medium";
  color?: "primary" | "secondary" | "error" | "warning" | "info" | "success";
}

export const CustomRadioButton: React.FC<CustomRadioButtonProps> = ({
  id = "",
  label = "",
  options = [],
  onChangeHandler = (e: any) => {},
  size = "small",
  color = "primary",
}: CustomRadioButtonProps) => {
  const [value, setValue] = useState("");
  useEffect(() => {
    if (!options.length) {
      throw new Error("Array need to have atleast two Elements");
    }
  });
  return (
    <FormControl>
      <FormLabel id={id}>{label}</FormLabel>
      <RadioGroup
        name={id}
        aria-labelledby={`${id}_arialabel`}
        value={value}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setValue(event.target.value);
          onChangeHandler(event.target.value);
        }}
      >
        {options.map(({ radioLabel, radioValue }) => {
          return (
            <FormControlLabel
              key={`${radioLabel}_radiobuttonOptions`}
              control={<Radio size={size} color={color} />}
              label={radioLabel}
              value={radioValue}
            />
          );
        })}
      </RadioGroup>
    </FormControl>
  );
};
