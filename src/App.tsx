import { ThemeProvider } from "styled-components";

import { HomePage } from "./pages";

import { DefaultTheme, GlobalStyles } from "@/styles";

function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyles />
      <HomePage />
    </ThemeProvider>
  );
}

export default App;
