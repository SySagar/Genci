"use client";
import Header from "./header/Header";
import "../globals.css";
import { Stack } from "@mui/material";;
import AppTheme from "../theme/AppTheme";
import { Toaster } from "react-hot-toast";
import ScrollToTop from "../common/ScrollToTop";

export default function SharedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
        <AppTheme>
            <Toaster position="top-center"></Toaster>
            <Stack minHeight={"100vh"} sx={{background:'#F5F5F5'}}>
              <Header />
              <Stack flexGrow={1}>
                <ScrollToTop />
                {children}
              </Stack>
            </Stack>
        </AppTheme>
  );
}