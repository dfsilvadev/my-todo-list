import { ThemeProvider } from "styled-components";

import { Header } from "@/components";

import { DefaultTheme, GlobalStyles } from "@/styles";

function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyles />
      <Header />
    </ThemeProvider>
  );
}

export default App;
