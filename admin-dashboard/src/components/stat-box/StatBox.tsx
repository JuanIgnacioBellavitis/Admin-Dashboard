import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../App";
import { ProgressCircle } from "../progress-circle/ProgressCircle";

type StatBoxProps = {
  title: string;
  subtitle: string;
  icon: any;
  progress: number;
  increase: any;
};

export function StatBox({
  title,
  subtitle,
  icon,
  progress,
  increase,
}: StatBoxProps) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box width={"100%"} m="0 30px">
      <Box display={"flex"} justifyContent={"space-between"}>
        <Box>
          {icon}
          <Typography
            variant="h4"
            fontWeight={"bold"}
            sx={{ color: colors.palette.grey[100] }}
          >
            {title}
          </Typography>
        </Box>
        <Box>
          <ProgressCircle progress={progress} />
        </Box>
      </Box>

      <Box display={"flex"} justifyContent={"space-between"}>
        <Typography
          variant="h5"
          sx={{ color: colors.palette.greenAccent[500] }}
        >
          {subtitle}
        </Typography>
        <Typography
          variant="h5"
          fontStyle={"italic"}
          sx={{ color: colors.palette.greenAccent[600] }}
        >
          {increase}
        </Typography>
      </Box>
    </Box>
  );
}
