import { create } from "zustand";

const useEditorContent = create((set) => ({
  content: "",
  language: "cpp",
  setContent: (content: string) => set({ content }),
  setLanguage: (language: string) => set({ language }),
}));

export default useEditorContent;
