import { Link, Stack, Typography } from "@mui/material";
import HeaderActions from "./HeaderActions";
import Cookies from "js-cookie";

export default function Header() {
  const token = Cookies.get('accessToken');

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
            {token ? (
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