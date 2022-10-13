import { useEffect } from "react";
import { ButtonGroup, Button } from "@mui/material";
import { CustomButton } from "../CustomButton";
interface ButtonArray {
  id: string;
  buttonLabel: string;
  buttonOnClick: () => void;
}

interface CustomButtonGroupProps {
  id: string;
  variant?: "contained" | "outlined" | "text";
  orientation?: "vertical" | "horizontal";
  size?: "small" | "medium" | "large";
  color?: "primary" | "secondary" | "error" | "warning" | "info" | "success";
  buttonsArray: ButtonArray[];
}

export const CustomButtonGroup: React.FC<CustomButtonGroupProps> = ({
  variant = "outlined",
  orientation = "horizontal",
  size = "medium",
  color = "primary",
  buttonsArray = [],
}: CustomButtonGroupProps) => {
  useEffect(() => {
    if (!buttonsArray.length) {
      throw new Error("Button Array should contain atleat on element");
    }
  }, [buttonsArray]);

  return (
    <ButtonGroup
      variant={variant}
      orientation={orientation}
      size={size}
      color={color}
    >
      {buttonsArray.map((buttonInstance, index) => {
        const {
          buttonLabel = "",
          buttonOnClick = () => {},
          id = "",
        } = buttonInstance;
        return (
          <Button
            id={`ButtonGroup_${id}`}
            key={`${index}_${id}`}
            onClick={buttonOnClick}
          >
            {buttonLabel}
          </Button>
        );
      })}
    </ButtonGroup>
  );
};
