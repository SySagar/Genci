"use client";
import { Stack } from "@mui/material";
import CodeEditor from "./CodeEditor";
import Sidebar from "./Sidebar";
import QuestionBox from "./QuestionBox";
import React, { useEffect, useState } from "react";
import Timer from "./Timer";
import { useParams } from 'next/navigation'
import useEndTime from "../hooks/useEndTime";
import { APIMethods } from "@/app/lib/axios/api";
import { useRouter } from "next/navigation";

export default function Battlegrounds() {
  const [active] = useEndTime((state: any) => [state.active]);

  // useEffect(() => {
  //   console.log("joined");
  //   toast.success("You have joined the room!", {
  //     style: {
  //       padding: '16px',
  //       color: '#0D0D0D',
  //     },
  //     iconTheme: {
  //       primary: 'green',
  //       secondary: '#FFFAEE',
  //     },
  //   });
  // },[])

  const [verifiedToken, setVerifiedToken] = useState(null);
  const router = useRouter();
  const params = useParams()
 
  const verifyToken = async () => {
    try {
      const response : any = await APIMethods.user.verify();
      return response.status;  // Assuming response contains the relevant token verification data
    } catch (error) {
      console.error("Error verifying token:", error);
      return null;  // Return null in case of an error
    }
  };

  const populate = async () => {
    try {
      const response : any = await APIMethods.playgrounds.populatePlayground({roomId:params.userID});
      console.log(response);
    } catch (error) {
      console.error("Error populating:", error);
      return null;  // Return null in case of an error
    }
  }

  useEffect(() => {
    // Verify the token and update the state accordingly
    const fetchTokenVerification = async () => {
      const result = await verifyToken();
      setVerifiedToken(result);
    };

    fetchTokenVerification();

    populate();
    }, []);
    
    useEffect(() => {
    if (verifiedToken === undefined) {
      router.replace('/auth/login');
    }

  }, [verifiedToken]);

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
