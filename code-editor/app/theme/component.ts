const componentOverrides: any = {
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          borderRadius: "6px",
          textTransform: "none",
          background: "#262626",
          color: "#FAF7FF",
          "&:hover": {
            background: "#0d0d0d",
          },
          '&.Mui-disabled': {
            backgroundColor: "#B6B6B4",
            color: " #696969",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundImage: "none",
        },
      },
    },
  };
  
  export default componentOverrides;