import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import React, { useEffect, useState } from "react";

interface ToggleButtonArray {
  buttonText: string;
  buttonValue: any;
}

interface CustomToggleButtonProps {
  id: string;
  toggleButtonArray: ToggleButtonArray[];
  getValue: (value: string[]) => void;
  color?: "primary" | "secondary" | "error" | "warning" | "info" | "success";
  size?: "small" | "medium" | "large";
}

export const CustomeToggleButton: React.FC<CustomToggleButtonProps> = ({
  id = "",
  toggleButtonArray = [],
  getValue = (value: string[]) => {},
  color = "primary",
  size = "medium",
}: CustomToggleButtonProps) => {
  const [value, setValue] = useState<string[]>([]);
  useEffect(() => {
    if (!toggleButtonArray.length) {
      throw new Error("Array should contain atleat on element");
    }
  }, [toggleButtonArray]);

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    updatedValue: string[]
  ) => {
    setValue(updatedValue);
    getValue(updatedValue);
  };

  return (
    <ToggleButtonGroup
      id={id}
      value={value}
      onChange={handleChange}
      color={color}
      size={size}
    >
      {toggleButtonArray.map((toggleButton, index) => {
        const { buttonText = "", buttonValue = "" } = toggleButton;
        return <ToggleButton  key={`${index}_${id}`} value={buttonText}>{buttonValue}</ToggleButton>;
      })}
    </ToggleButtonGroup>
  );
};
