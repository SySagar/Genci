import { Link, Stack, Typography } from "@mui/material";
import HeaderActions from "./HeaderActions";
import { useEffect,useState } from "react";
import { APIMethods } from "@/app/lib/axios/api";

export default function Header() {
  const [verifiedToken, setVerifiedToken] = useState(null);
 
  const verifyToken = async () => {
    try {
      const response : any = await APIMethods.user.verify();
      console.log(response);
      return response.status;  // Assuming response contains the relevant token verification data
    } catch (error) {
      console.error("Error verifying token:", error);
      return null;  // Return null in case of an error
    }
  };

  useEffect(() => {
    // Verify the token and update the state accordingly
    const fetchTokenVerification = async () => {
      const result = await verifyToken();
      setVerifiedToken(result);
    };

    fetchTokenVerification();
  }, []);

  return (
    <Stack
      className="navbar"
      width={"100%"}
      minHeight={"50px"}
      justifyContent={"center"}
      borderBottom={1}
      borderColor={"#E0E0E0"}
      position={"sticky"}
      top={0}
      zIndex={50}
      sx={
        {
          background: "#F5F5F5",
        }
      }
    >
      <Stack
        className="navbar-container"
        paddingX={3}
        paddingY={1}
        direction={"row"}
        alignItems={"center"}
      >
        <Stack direction={"row"} gap={1}>
          <Typography
            component={Link}
            href="/"
            style={{
              textDecoration: "none",
            }}
            fontSize={20}
            fontWeight={500}
          >
            Codegrounds
          </Typography>
        </Stack>

        <Stack flexGrow={1}></Stack>

        <Stack>
          <HeaderActions>
            {verifiedToken ? (
              <HeaderActions.AuthorizedActions />
            ) : (
              <HeaderActions.UnAuthorizedActions />
            )}
          </HeaderActions>
        </Stack>
      </Stack>
    </Stack>
  );
}