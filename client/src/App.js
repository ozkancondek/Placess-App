import { ThemeProvider, useTheme } from "./providers/ThemeProvider";
import { BackgroundThemeContainer } from "./styles/Theme";
import { MainProvider } from "./providers/MainProvider";
import { ApiProvider } from "./providers/ApiProvider";
import { SearchProvider } from "./providers/SearchProvider";
import { Error } from "./components/Error";
import { Router } from "./routes/Router.";
import { ErrorBoundary } from "react-error-boundary";

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
  <ErrorBoundary FallbackComponent={Error}>
    <ThemeProvider>
      <MainProvider>
        <SearchProvider>
          <ApiProvider>
            <App />
          </ApiProvider>
        </SearchProvider>
      </MainProvider>
    </ThemeProvider>
  </ErrorBoundary>
);

export default Main;
