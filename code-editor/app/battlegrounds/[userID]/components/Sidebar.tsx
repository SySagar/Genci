import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  CircularProgress,
  Divider,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import StarIcon from "@mui/icons-material/Star";
import React from "react";
import SportsScoreIcon from "@mui/icons-material/SportsScore";
import sidebarStyles from "../battlegrounds.module.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import playerStyles from "../battlegrounds.module.css";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import useEditorContent from "../hooks/useEditorContent";
import { APIMethods } from "@/app/lib/axios/api";
import { useParams, useSearchParams } from 'next/navigation'
import toast from "react-hot-toast";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "relative",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

export default function Sidebar() {
  const [loading, setLoading] = React.useState(false);
  const [value, setValue] = React.useState(0);
  const [pass, setPass] = React.useState(false);
  const [content,language] = useEditorContent((state: any) => [state.content,state.language]);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const params = useParams()


  const executeCode = async () => {
    setLoading(true);

    const code = content;
    const data = {
      code: code,
      language: language,
      roomId: params.userID 
      // params.userID
    };
    await APIMethods.playgrounds.executeCode(data).then((res) => {
      console.log("result",res.data.message); 
      if(res.data.message === "success"){
        setPass(true);
        toast.success("All test cases passed!", {
          style: {
            padding: '16px',
            color: '#6FD392',
          },
          iconTheme: {
            primary: '#6FD392',
            secondary: '#DAF4E3',
          },
        });
      }
      else
      {
        setPass(false);
        toast.error(res.data.message, {
          style: {
            padding: '16px',
            color: '#0D0D0D',
          },
          iconTheme: {
            primary: 'red',
            secondary: '#FFFAEE',
          },
        });
      }
    }
    ).catch((err) => {
      console.log(err);
    }).finally(() => {
      setLoading(false);
    });

  };

  return (
    <Stack
      position={"sticky"}
      top={"55px"}
      left={0}
      borderRight={2}
      borderColor={"divider"}
      maxHeight={"100vh"}
      padding={3}
      direction={"column"}
      minWidth={"260px"}
      height={"90vh"}
    >
      <Stack height={"100%"} gap={4}>
        <Stack
          direction={"row"}
          gap={1}
          alignItems={"center"}
          color={"#00cc00"}
        >
          <LocalOfferIcon
            sx={{ width: "20px", height: "20px" }}
          ></LocalOfferIcon>
          <Typography variant="h6">Easy</Typography>
        </Stack>

        <Stack
          className="metadata"
          direction={"row"}
          justifyContent={"space-around"}
          alignItems={"start"}
          width={"100%"}
        >
          <Box flexDirection={"column"}>
            <ThumbUpIcon sx={{ width: "30px", height: "30px" }}></ThumbUpIcon>
            <Typography>5k</Typography>
          </Box>
          <Box flexDirection={"column"}>
            <ThumbDownAltIcon
              sx={{ width: "30px", height: "30px" }}
            ></ThumbDownAltIcon>
            <Typography>1.2k</Typography>
          </Box>
          <Box>
            <StarIcon sx={{ width: "30px", height: "30px" }}></StarIcon>
          </Box>
        </Stack>

        <Divider
          sx={{
            width: "100%",
            height: "2px",
          }}
        />

        <Stack paddingY={"15px"} gap={2}>
          <Stack
            direction={"column"}
            justifyContent={"flex-start"}
            alignItems={"start"}
            paddingX={3}
            width={"fit-content"}
          >
            <Typography variant="h6">20+ solvers</Typography>
            <AvatarGroup max={4}>
              <Avatar
                alt="Remy Sharp"
                src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              />
              <Avatar
                alt="Travis Howard"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              />
              <Avatar
                alt="Cindy Baker"
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80"
              />
              <Avatar
                alt="Agnes Walker"
                src="https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1899&q=80"
              />
              <Avatar
                alt="Trevor Henderson"
                src="/static/images/avatar/5.jpg"
              />
            </AvatarGroup>
          </Stack>
          <br />

          <Tooltip title="score" arrow sx={{ cursor: "pointer" }}>
            <Stack
              alignItems={"center"}
              direction={"row"}
              border={2}
              borderRadius={"20px"}
              paddingY={1}
              paddingX={3}
              width={"fit-content"}
            >
              <Typography variant="h4">70</Typography>
              <SportsScoreIcon sx={{ width: "60px", height: "60px" }} />
            </Stack>
          </Tooltip>
        </Stack>
      </Stack>

      <Stack paddingY={5} alignItems={"center"}>
        <Button
        onClick={executeCode}
          variant="contained"
          sx={{ maxWidth: "160px" }}
          endIcon={
            !loading &&<ArrowForwardIcon />}
        >
          {
            loading ? 
            <CircularProgress /> 
            :
            "Execute"
          }
        </Button>
      </Stack>
    </Stack>
  );
}
