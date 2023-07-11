import { ThemeProvider } from "styled-components";

import { HomePage } from "./pages";

import { TaskContextProvider } from "@contexts/taskContext";

import { DefaultTheme, GlobalStyles } from "@/styles";

function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyles />

      <TaskContextProvider>
        <HomePage />
      </TaskContextProvider>
    </ThemeProvider>
  );
}

export default App;
