import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { Header } from "../../components/header/header";
import { tokens } from "../../App";
import { mockTransactions } from "../../data/mockData";
import {
  DownloadOutlined,
  Email,
  PointOfSale,
  PersonAdd,
  Traffic,
} from "@mui/icons-material";
import { LineChartComponent as LineChart } from "../../components/charts/linechart/lineChart";
import { BarChartComponent as BarChart } from "../../components/charts/barchart/barChart";
import { GeographyChartComponent as GeoChart } from "../../components/charts/mapchart/geographyChart";
import { StatBox } from "../../components/stat-box/StatBox";
import { ProgressCircle } from "../../components/progress-circle/ProgressCircle";

export function Dashboard() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m={"20px"}>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
        <Box>
          <Button
            sx={{
              backgroundColor: colors.palette.blueAccent[700],
              color: colors.palette.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlined sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>

      {/* GRID AND CHARTS */}
      <Box
        display={"grid"}
        gridTemplateColumns={"repeat(12, 1fr)"}
        gridAutoRows={"140px"}
        gap={"20px"}
      >
        {/* ROW 1  */}
        <Box
          gridColumn={"span 3"}
          sx={{ backgroundColor: `${colors.palette.primary[400]}` }}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <StatBox
            title="12,361"
            subtitle="Email Sent"
            progress={0.75}
            increase={"+14%"}
            icon={
              <Email
                sx={{
                  color: colors.palette.greenAccent[600],
                  fontSize: "26px",
                }}
              />
            }
          />
        </Box>
        <Box
          gridColumn={"span 3"}
          sx={{ backgroundColor: `${colors.palette.primary[400]}` }}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <StatBox
            title="431,225"
            subtitle="Sales Obtained"
            progress={0.5}
            increase={"+21%"}
            icon={
              <PointOfSale
                sx={{
                  color: colors.palette.greenAccent[600],
                  fontSize: "26px",
                }}
              />
            }
          />
        </Box>
        {/* ROW 1  */}
        <Box
          gridColumn={"span 3"}
          sx={{ backgroundColor: `${colors.palette.primary[400]}` }}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <StatBox
            title="32,441"
            subtitle="New Clients"
            progress={0.75}
            increase={"+14%"}
            icon={
              <PersonAdd
                sx={{
                  color: colors.palette.greenAccent[600],
                  fontSize: "26px",
                }}
              />
            }
          />
        </Box>
        <Box
          gridColumn={"span 3"}
          sx={{ backgroundColor: `${colors.palette.primary[400]}` }}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <StatBox
            title="1,000,134"
            subtitle="Traffic Inbound"
            progress={0.8}
            increase={"+43%"}
            icon={
              <Traffic
                sx={{
                  color: colors.palette.greenAccent[600],
                  fontSize: "26px",
                }}
              />
            }
          />
        </Box>

        {/* ROW 2 */}
        <Box
          gridColumn={"span 8"}
          gridRow={"span 2"}
          sx={{ backgroundColor: colors.palette.primary[400] }}
        >
          <Box
            mt={"25px"}
            p={"0 30px"}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight={"600"}
                color={colors.palette.grey[100]}
              >
                Revenue Generated
              </Typography>
              <Typography
                variant="h3"
                fontWeight={"bold"}
                color={colors.palette.greenAccent[500]}
              >
                $59,123,456
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlined
                  sx={{
                    fontSize: "26px",
                    color: colors.palette.greenAccent[500],
                  }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height={"250px"} mt={"-20px"}>
            <LineChart isDashboard={true} />
          </Box>
        </Box>
        {/* TRANSACTIONS  */}
        <Box
          gridColumn={"span 4"}
          gridRow={"span 2"}
          overflow={"auto"}
          sx={{ backgroundColor: colors.palette.primary[400] }}
        >
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            borderBottom={`4px solid ${colors.palette.primary[500]}`}
            color={colors.palette.grey[100]}
            p="15px"
          >
            <Typography
              color={colors.palette.grey[100]}
              variant="h5"
              fontWeight={"600"}
            >
              Recent Transactions
            </Typography>
          </Box>
          {mockTransactions.map((transaction, index) => (
            <Box
              key={`${transaction.txId}-${index}`}
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
              borderBottom={`4px solid ${colors.palette.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.palette.greenAccent[500]}
                  variant="h5"
                  fontWeight={"600"}
                >
                  {transaction.txId}
                </Typography>
                <Typography color={colors.palette.grey[100]}>
                  {transaction.user}
                </Typography>
              </Box>
              <Box color={colors.palette.grey[100]}>{transaction.date}</Box>
              <Box
                sx={{ backgroundColor: colors.palette.greenAccent[500] }}
                p={"5px 10px"}
                borderRadius={"4px"}
              >
                ${transaction.cost}
              </Box>
            </Box>
          ))}
        </Box>

        {/* ROW 3 */}
        <Box
          gridColumn={"span 4"}
          gridRow={"span 2"}
          sx={{ backgroundColor: colors.palette.primary[400] }}
          p={"30px"}
        >
          <Typography variant="h5" fontWeight={"600"}>
            Campaign
          </Typography>
          <Box
            display={"flex"}
            flexDirection={"column"}
            alignItems={"center"}
            mt="25px"
          >
            <ProgressCircle size={125} />
            <Typography
              variant="h5"
              color={colors.palette.greenAccent[500]}
              sx={{ mt: "15px" }}
            >
              $48,123 revenue generated
            </Typography>
            <Typography>Includes extra misc expenditures and costs</Typography>
          </Box>
        </Box>
        <Box
          gridColumn={"span 4"}
          gridRow={"span 2"}
          sx={{ backgroundColor: colors.palette.primary[400] }}
        >
          <Typography variant="h5" fontWeight={"600"} p={"30px 30px 0 30px"}>
            Sales Quantity
          </Typography>
          <Box height={"250px"} mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn={"span 4"}
          gridRow={"span 2"}
          sx={{ backgroundColor: colors.palette.primary[400] }}
          p={"30px"}
        >
          <Typography variant="h5" fontWeight={"600"} mb={"15px"}>
            geography Based Traffic
          </Typography>
          <Box height={"200px"}>
            <GeoChart isDashboard={true} />
          </Box>
        </Box>
        {/*  */}
      </Box>
    </Box>
  );
}
