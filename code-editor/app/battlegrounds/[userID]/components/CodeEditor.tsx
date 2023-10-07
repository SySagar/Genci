import { Button, Menu, MenuItem, Stack } from "@mui/material";
import React from "react";
import Editor from "@monaco-editor/react";
import editorStyles from "../battlegrounds.module.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SettingsIcon from "@mui/icons-material/Settings";
import useEditorContent from "../hooks/useEditorContent";

export default function CodeEditor() {
  const [selectedLanguage, setSelectedLanguage] = React.useState("cpp"); 
  const [content,setContent,setLanguage] = useEditorContent((state: any) => [state.content,state.setContent,state.setLanguage]);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (lang:string) => {
    setAnchorEl(null);
    setSelectedLanguage(lang);
    setLanguage(lang);

  };

  const handleChange = (value: any) => {
    setContent(value);
  };

  return (
    <Stack direction={"column"} justifyContent={"center"} alignItems={"center"}>
      <Stack
        className={editorStyles.editor_inner_container}
        minWidth={"1000px"}
        position={"relative"}
      >
        <Stack alignItems={"end"}>
          <Stack className={editorStyles.options} direction={"row"}>

            <Button
              id="basic-button"
              variant="outlined"
              sx={{ maxWidth: "150px" }}
              endIcon={<KeyboardArrowDownIcon />}
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              {
                selectedLanguage
              }
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={
                () => {
                  handleClose("java");
                }
              }>Java</MenuItem>
              <MenuItem onClick={
                () => {
                  handleClose("Python");
                }
              }>Python</MenuItem>
              <MenuItem onClick={
                () => {
                  handleClose("cpp");
                }
              }>cpp</MenuItem>
            </Menu>
          </Stack>
        </Stack>

        <Editor
          theme="vs-dark"
          language="cpp"
          className={editorStyles.codeEditor}
          // value={content}
          onChange={handleChange}
        />
      </Stack>
    </Stack>
  );
}
