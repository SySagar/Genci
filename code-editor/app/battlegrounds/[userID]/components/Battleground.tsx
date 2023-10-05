"use client";
import { Stack } from "@mui/material";
import CodeEditor from "./CodeEditor";
import Sidebar from "./Sidebar";
import QuestionBox from "./QuestionBox";
import React, { useEffect } from "react";
import Timer from "./Timer";
import useEndTime from "../hooks/useEndTime";
import { toast } from "react-hot-toast";

export default function Battlegrounds() {
  const [active] = useEndTime((state: any) => [state.active]);

  useEffect(() => {
    console.log("joined");
    toast.success("You have joined the room!", {
      style: {
        padding: '16px',
        color: '#0D0D0D',
      },
      iconTheme: {
        primary: 'green',
        secondary: '#FFFAEE',
      },
    });
  },[])

  return (
    <Stack direction={"row"} position={"relative"}>
      <Sidebar />
      <Stack
        className="qna-outer"
        direction={"column"}
        position={"relative"}
        gap={10}
        marginTop={"2rem"}
        justifyContent={"center"}
        alignItems={"center"}
        overflow={"hidden"}
        width={"100%"}
      >
        {/* <Timer></Timer> */}
          <Stack gap={10} 
        marginY={4}>
            <QuestionBox />
            <CodeEditor />
          </Stack>
      </Stack>
    </Stack>
  );
}
