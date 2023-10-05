import { Typography } from "@mui/material";
import React from "react";
import { Stack } from "@mui/material";

export default function Solutions() {
  return (
    <Stack flexGrow={1}>
      <Typography
        variant="h4"
        color={"#fff"}
        paddingBottom={"2rem"}
        paddingTop={"5px"}
      >
        Solutions
      </Typography>
      <Typography variant="body1" color={"#fff"} lineHeight={"2rem"}>
        This is the solutions page
      </Typography>
    </Stack>
  );
}
