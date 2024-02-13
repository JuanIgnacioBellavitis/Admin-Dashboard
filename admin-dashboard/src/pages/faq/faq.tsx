import { Box, useTheme, Typography } from "@mui/material";
import { Header } from "../../components/header/header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../App";

export function FAQ() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.palette.greenAccent[500]} variant="h5">
            QUESTION 1
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam odit
            delectus, ad voluptate neque ex accusamus magnam et velit quod
            consequatur perspiciatis cupiditate eveniet, fuga molestiae
            excepturi saepe aut! Debitis?
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.palette.greenAccent[500]} variant="h5">
            QUESTION 2
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam odit
            delectus, ad voluptate neque ex accusamus magnam et velit quod
            consequatur perspiciatis cupiditate eveniet, fuga molestiae
            excepturi saepe aut! Debitis?
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.palette.greenAccent[500]} variant="h5">
            QUESTION 3
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam odit
            delectus, ad voluptate neque ex accusamus magnam et velit quod
            consequatur perspiciatis cupiditate eveniet, fuga molestiae
            excepturi saepe aut! Debitis?
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.palette.greenAccent[500]} variant="h5">
            QUESTION 4
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam odit
            delectus, ad voluptate neque ex accusamus magnam et velit quod
            consequatur perspiciatis cupiditate eveniet, fuga molestiae
            excepturi saepe aut! Debitis?
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.palette.greenAccent[500]} variant="h5">
            QUESTION 5
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam odit
            delectus, ad voluptate neque ex accusamus magnam et velit quod
            consequatur perspiciatis cupiditate eveniet, fuga molestiae
            excepturi saepe aut! Debitis?
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.palette.greenAccent[500]} variant="h5">
            QUESTION 6
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam odit
            delectus, ad voluptate neque ex accusamus magnam et velit quod
            consequatur perspiciatis cupiditate eveniet, fuga molestiae
            excepturi saepe aut! Debitis?
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
