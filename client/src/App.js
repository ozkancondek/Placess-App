import { ThemeProvider, useTheme } from "./providers/ThemeProvider";
import { BackgroundThemeContainer } from "./styles/Theme";
import { MainProvider, useOut } from "./providers/MainProvider";
import { ApiProvider } from "./providers/ApiProvider";
import { SearchProvider } from "./providers/SearchProvider";
import { Error } from "./components/Error";
import { Router } from "./routes/Router.";
import { ErrorBoundary } from "react-error-boundary";

const App = () => {
  const { isAuthenticated } = useOut();
  console.log(isAuthenticated);
  const { theme } = useTheme();
  return (
    <BackgroundThemeContainer theme={theme}>
      <Router />
    </BackgroundThemeContainer>
  );
};

const Main = () => (
  /*   <ErrorBoundary FallbackComponent={Error}> */
  <ThemeProvider>
    <MainProvider>
      <SearchProvider>
        <ApiProvider>
          <App />
        </ApiProvider>
      </SearchProvider>
    </MainProvider>
  </ThemeProvider>
  /*   </ErrorBoundary> */
);

export default Main;
