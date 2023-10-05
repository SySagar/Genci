import { Padding } from "@mui/icons-material";
import {
    Avatar,
    Button,
    Stack,
    Typography,
  } from "@mui/material";
  import Link from '@mui/material/Link';
  import CodeIcon from '@mui/icons-material/Code';
  
  const AuthorizedActions = () => {
   
  
    return (
      <Stack direction={"row"} justifyContent={"center"} alignItems={"center"} gap={3}>
       <Stack direction={'row'}
        alignItems={'center'
      } gap={1}
      sx={{
        '&:hover': {
          cursor: 'pointer',
          color: '#FF8766',
        }
      }}
        padding={1}>
        {/* <img
        style={{
          width: '20px',
          height: '20px',
        }}
         src="/editor.png" alt="" /> */}
        <CodeIcon/>
       <Typography variant={'body1'}
       >
        Code
       </Typography>
       </Stack>

       <Stack>
       <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" />
       </Stack>
      </Stack>
    );
  };
  
  const UnauthorizedActions = () => {
    return (
      <Stack direction={"row"} gap={1} paddingY={1}>
        <Button
          component={Link}
          href="/auth/login"
        >
          Login
        </Button>
        <Button
          component={Link}
          href={"/auth/register"}
          variant={"contained"}
        >
          Register
        </Button>
      </Stack>
    );
  };
  
  const HeaderActions = ({ children }: any) => {
    return (
      <Stack direction="row" gap="8px" alignItems="center">
        {children}
      </Stack>
    );
  };
  
  HeaderActions.AuthorizedActions = AuthorizedActions;
  HeaderActions.UnAuthorizedActions = UnauthorizedActions;
  
  export default HeaderActions;