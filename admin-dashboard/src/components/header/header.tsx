import { Typography, Box, useTheme } from "@mui/material";
import { tokens } from "../../App";

interface HeaderProps {
  title: string;
  subtitle: string;
}

export function Header({ title, subtitle }: HeaderProps) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box mb={"30px"}>
      <Typography
        variant="h2"
        color={colors.palette.grey[100]}
        fontWeight={"bold"}
        sx={{ mb: "5px" }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={colors.palette.greenAccent[400]}>
        {subtitle}
      </Typography>
    </Box>
  );
}
