import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import {useState } from "react";
import { CustomTypography } from "../CustomTypography";

interface AccordianArray {
  accordianId: string;
  header: string;
  content: string;
}

interface CustomAccordianProps {
  id: string;
  expandIcon: React.ReactNode;
  accordionArray: AccordianArray[];
}

export const CustomAccordian: React.FC<CustomAccordianProps> = ({
  id = "",
  expandIcon = <></>,
  accordionArray = [],
}: CustomAccordianProps) => {
  const [expanded, setExpanded] = useState<string | false>(false);
  return (
    <>
      {accordionArray.map(({ accordianId, header, content }) => {
        return (
          <Accordion
            id={id}
            expanded={expanded === accordianId}
            onChange={(event, isExpanded) => {
              setExpanded(isExpanded ? accordianId : false);
            }}
          >
            <AccordionSummary id={accordianId} expandIcon={expandIcon}>
              <CustomTypography
                id={`${accordianId}_header`}
                text={header}
                variant={"h6"}
              />
            </AccordionSummary>
            <AccordionDetails>
              <CustomTypography
                id={`${accordianId}_content`}
                text={content}
                variant={"body1"}
              />
            </AccordionDetails>
          </Accordion>
        );
      })}
    </>
  );
};
