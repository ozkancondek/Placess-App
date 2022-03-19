import { ThemeProvider, useTheme } from "./providers/ThemeProvider";
import { BackgroundThemeContainer } from "./styles/Theme";
import { Home } from "./pages/Home";
import { Footer } from "./components/footer/Footer";

const App = () => {
  const { theme } = useTheme();

  return (
    /*    <BackgroundThemeContainer theme={theme}>
      <Home />
    </BackgroundThemeContainer> */
    <>
      <Home />
      <Footer />
    </>
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
