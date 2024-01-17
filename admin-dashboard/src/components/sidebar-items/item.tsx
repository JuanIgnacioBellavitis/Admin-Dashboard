import { Typography, useTheme } from "@mui/material";
import { MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { tokens } from "../../App";

interface ItemProps {
  title: string;
  to: any;
  icon: any;
  selected: string;
  setSelected: (arg: string) => void;
}

export function SideBarMenuItem({
  title,
  to,
  icon,
  selected,
  setSelected,
}: ItemProps) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      active={selected === title}
      style={{ color: colors.palette.grey[100] }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
}
