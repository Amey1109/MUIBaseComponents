import { Autocomplete, TextField } from "@mui/material";
import { useEffect, useState } from "react";

interface autoCompleteOtions {
  id: number;
  label: string;
}
interface CustomAutocompleteProps {
  id: string;
  label: string;
  options: autoCompleteOtions[];
  otherProps?: {};
  onChangeHandler?: (e: any) => any;
  size?: "small" | "medium";
  color?: "primary" | "secondary" | "error" | "warning" | "info" | "success";
  isFreeSolo?: boolean;
}

export const CustomAutoComplete: React.FC<CustomAutocompleteProps> = ({
  id = "",
  options = [],
  otherProps = {},
  onChangeHandler = (e: any) => {},
  size = "small",
  color = "primary",
  isFreeSolo = false,
  label = "",
}: CustomAutocompleteProps) => {
  const [value, setValue] = useState<any | null>(null);
  useEffect(() => {
    if (!options.length) {
      throw new Error("Array need to have atleast two Elements");
    }
  });
  return (
    <>
      <Autocomplete
        id={id}
        options={options}
        renderInput={(params) => (
          <TextField {...params} label={label} size={size} color={color} />
        )}
        onChange={(event: any, newValue: any | null) => {
          setValue(newValue);
          onChangeHandler(newValue);
        }}
        freeSolo={isFreeSolo}
        {...otherProps}
      />
    </>
  );
};
