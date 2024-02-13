import { Box } from "@mui/material";
import { BarChartComponent } from "../../components/charts/barchart/barChart";
import { Header } from "../../components/header/header";

export function Bar() {
  return (
    <Box m="20px">
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />
      <Box height={"75vh"}>
        <BarChartComponent />
      </Box>
    </Box>
  );
}
