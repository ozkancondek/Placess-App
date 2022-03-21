import { ThemeProvider, useTheme } from "./providers/ThemeProvider";
import { BackgroundThemeContainer } from "./styles/Theme";
import { Home } from "./pages/Home";
import { MainProvider, useOut } from "./providers/MainProvider";
import { ApiProvider, useApi } from "./providers/ApiProvider";
import { useEffect } from "react";
import { SearchProvider } from "./providers/SearchProvider";
import { Navigation } from "./components/Navigation";
import { Router } from "./routes/Router.";

const App = () => {
  const { theme } = useTheme();
  /*   const { getAllCities } = useApi();
  useEffect(() => {
    const fetch = async () => {
      try {
        let res = await getAllCities();

        console.log(res.cityList);
      } catch (error) {
        console.log(error);
      }
    };
    fetch();
  }, [getAllCities]); */

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
    <MainProvider>
      <SearchProvider>
        <ApiProvider>
          <App />
        </ApiProvider>
      </SearchProvider>
    </MainProvider>
  </ThemeProvider>
);

export default Main;
