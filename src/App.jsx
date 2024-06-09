import PageRouter from "./router/PageRouter";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";
import { AuthContext } from "./context/AuthContext";
import { useState, useEffect } from "react";
import axiosInstance from "@services/api";

function App() {
  const [Auth, setAuth] = useState(null);
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  useEffect(() => {
    const storedAuth = localStorage.getItem("auth");
    if (storedAuth) {
      const authJSON = JSON.parse(storedAuth);
      setAuth(authJSON);
      axiosInstance.defaults.headers.common["Authorization"] = "Bearer " + authJSON.user.token;

    }
  }, []);

  useEffect(() => {
    if (Auth) {
      localStorage.setItem("auth", JSON.stringify(Auth));
    } else {
      localStorage.removeItem("auth");
    }
  }, [Auth]);

  return (
    <QueryClientProvider client={queryClient}>
        <AuthContext.Provider value={{ Auth, setAuth }}>
          <PageRouter />
          <ReactQueryDevtools initialIsOpen={false}  position="bottom-right"/>
        </AuthContext.Provider>
    </QueryClientProvider>
  );
}

export default App;
