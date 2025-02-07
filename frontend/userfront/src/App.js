import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppLayout from "./components/AppLayout";
import AppRouter from "./components/AppRouter";
import { BrowserRouter as Router } from "react-router-dom";
import "@ant-design/v5-patch-for-react-19";
import ThemeProvider from "./pages/ThemeProvide";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <ThemeProvider>
          <AppLayout>
            <AppRouter />
          </AppLayout>
        </ThemeProvider>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
