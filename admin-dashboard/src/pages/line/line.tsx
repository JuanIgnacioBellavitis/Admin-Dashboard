import { LineChartComponent } from "../../components/charts/linechart/lineChart";
import { Box } from "@mui/material";
import { Header } from "../../components/header/header";

export function Line() {
  return (
    <Box m="20px">
      <Header title="Line Chart" subtitle="Simple Line Chart" />
      <Box height={"75vh"}>
        <LineChartComponent />
      </Box>
    </Box>
  );
}
