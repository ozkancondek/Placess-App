import { Router } from "./routes/Router";

import { ThemeProvider, useTheme } from "./providers/ThemeProvider";
import { BackgroundThemeContainer } from "./styles/Theme";

const App = () => {
  const { theme } = useTheme();

  return (
    <BackgroundThemeContainer theme={theme}>
      <Router />
    </BackgroundThemeContainer>
  );
};

const Main = () => (
  /*   <ErrorBoundary FallbackComponent={Error}>
    <ThemeProvider>
      <MainProvider>
        <SearchProvider>
          <ApiProvider>
            <App />
          </ApiProvider>
        </SearchProvider>
      </MainProvider>
    </ThemeProvider>
  </ErrorBoundary> */
  <ThemeProvider>
    <App />
  </ThemeProvider>
);

export default Main;
