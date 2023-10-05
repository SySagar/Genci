import { Tab } from "@mui/material";
import React from "react";
import qbStyles from "../battlegrounds.module.css";
import LinkTabProps from "../types/linktypes";

export default function LinkTab(props: LinkTabProps) {
  return (
    <div>
      <Tab
        sx={{ fontWeight: "600", color: "#f4e8df",
        '&.Mui-selected': {
          color: '#FF8766',
        } }}
        component="a"
        onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
          event.preventDefault();
        }}
        {...props}
      />
    </div>
  );
}
