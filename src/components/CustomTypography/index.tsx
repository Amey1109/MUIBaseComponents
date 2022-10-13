import { Typography } from "@mui/material";

interface CustomTypographyProps {
  id: string;
  text: string;
  variant:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2";
  otherProps?: {};
}

export const CustomTypography: React.FC<CustomTypographyProps> = ({
  id = "",
  text = "",
  variant = "h4",
  otherProps = {},
}: CustomTypographyProps) => {
  return (
    <div>
      <Typography id={id} variant={variant} {...otherProps}>
        {text}
      </Typography>
    </div>
  );
};
