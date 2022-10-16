import {
  Box,
  Card,
  CardContent,
  CardMedia,
  CardActions
} from "@mui/material";
import { CustomButton } from "../CustomButton";
import { CustomTypography } from "../CustomTypography";

interface CardImage {
  id: string;
  src: string;
}

interface CardActionsArray {
  id: string;
  actionLabel: string;
  actionOnClick?: () => void;
  otherActionsProps?: {};
}

interface CustomCardProps {
  id: string;
  cardHeader: string;
  cardContent: string;
  cardActions?: CardActionsArray[];
  cardImage?: CardImage | null;
  cardWidth?: string;
}

export const CustomCard: React.FC<CustomCardProps> = ({
  id = "",
  cardHeader = "",
  cardContent = "",
  cardActions = [],
  cardImage = null,
  cardWidth = "300px",
}: CustomCardProps) => {
  return (
    <Box width={cardWidth}>
      <Card id={id}>
        {cardImage && (
          <CardMedia
            id={cardImage?.id}
            component="img"
            height="140"
            image={cardImage?.src}
          />
        )}
        <CardContent>
          <CustomTypography
            id="custom-card-header"
            variant="h5"
            text={cardHeader}
            otherProps={{
              gutterBottom: true,
              component: "div",
            }}
          />
          <CustomTypography
            id="custom-card-content"
            variant="body2"
            text={cardContent}
            otherProps={{
              color: "text.secondary",
            }}
          />
        </CardContent>
        {cardActions.length ? (
          <CardActions>
            {cardActions.map(
              ({ id, actionLabel, actionOnClick, otherActionsProps }) => {
                return (
                    <CustomButton
                      id={id}
                      buttonText={actionLabel}
                      onClickHandler={actionOnClick}
                      otherProps={{
                        ...otherActionsProps,
                      }}
                      variant="text"
                    />
                );
              }
            )}
          </CardActions>
        ) : null}
      </Card>
    </Box>
  );
};
