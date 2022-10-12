import { Typography } from "@mui/material";

interface CustomTypographyProps {
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
  text = "",
  variant = "h4",
  otherProps = {},
}: CustomTypographyProps) => {
  return (
    <div>
      <Typography variant={variant} {...otherProps}>
        {text}
      </Typography>
    </div>
  );
};
