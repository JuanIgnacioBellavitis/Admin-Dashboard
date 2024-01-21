import { Typography, useTheme, Link } from "@mui/material";
import { MenuItem } from "react-pro-sidebar";
import { NavLink } from "react-router-dom";
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
      <Link
        component={NavLink}
        to={to}
        style={{
          color: colors.palette.grey[100],
          textDecoration: "none", // Remove underline by default
          transition: "color 0.3s", // Add a smooth transition effect
        }}
        type="text"
      >
        <Typography>{title}</Typography>
      </Link>
    </MenuItem>
  );
}
