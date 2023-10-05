import { Box, Button, Card, IconButton, Stack, Tab, Tabs, Typography } from "@mui/material";
import React from "react";
import qbStyles from "../battlegrounds.module.css";
import ShareIcon from "@mui/icons-material/Share";
import LinkTab from "./LinkTab";
import dynamic from "next/dynamic";
const Questions = dynamic(() => import("./Questions"));
const Solutions = dynamic(() => import("./Solutions"));
const Discussions = dynamic(() => import("./Discussions"));

export default function QuestionBox() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Stack flexGrow={1} width={'1000px'} >
      <Card className={qbStyles.question_box_inner} sx={{ padding: "25px" }}>
        <Stack direction={"row"} width={"100%"} color={"#fff"}>
          <Box sx={{ borderBottom: 2, borderColor: "divider" }}>
            <Tabs
              value={value}
              indicatorColor="secondary"
              onChange={handleChange}
            >
              <LinkTab label="Question" />
              <LinkTab label="Solution" />
              <LinkTab label="Discussion" />
            </Tabs>
          </Box>

          <Stack flexGrow={1}></Stack>
          <IconButton sx={{ padding: 0, color: "#fff" }} disableRipple>
            <ShareIcon></ShareIcon>
          </IconButton>
        </Stack>

        {value === 0 && <Questions />}
        {value === 1 && <Solutions />}
        {value === 2 && <Discussions />}
      </Card>
    </Stack>
  );
}
