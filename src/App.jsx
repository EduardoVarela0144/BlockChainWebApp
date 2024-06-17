import PageRouter from "./router/PageRouter";
import { ReactQueryDevtools } from "react-query/devtools";
import { QueryClient, QueryClientProvider } from "react-query";
import { AuthContext } from "./context/AuthContext";
import { ApiContext } from "./context/ApiContext";
import { useState, useEffect } from "react";
import axiosInstance from "@services/api";

function App() {
  const [Auth, setAuth] = useState(null);
  const [Api, setApi] = useState(null);

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  useEffect(() => {
    const storedAuth = localStorage.getItem("auth");
    const storedApi = localStorage.getItem("api");
    if (storedAuth) {
      const authJSON = JSON.parse(storedAuth);
      setAuth(authJSON);
      axiosInstance.defaults.headers.common["Authorization"] =
        "Bearer " + authJSON.user.token;
    }
    if (storedApi) {
      const apiJSON = JSON.parse(storedApi);
      setApi(apiJSON);
    }
  }, []);

  useEffect(() => {
    if (Auth) {
      localStorage.setItem("auth", JSON.stringify(Auth));
    } else {
      localStorage.removeItem("auth");
    }
  }, [Auth]);

  useEffect(() => {
    if (Api) {
      localStorage.setItem("api", JSON.stringify(Api));
    } else {
      localStorage.removeItem("api");
    }
  }, [Api]);

  return (
    <QueryClientProvider client={queryClient}>
      <AuthContext.Provider value={{ Auth, setAuth }}>
        <ApiContext.Provider value={{ Api, setApi }}>
          <PageRouter />
          {/* <ReactQueryDevtools initialIsOpen={false} position="bottom-right" /> */}
        </ApiContext.Provider>
      </AuthContext.Provider>
    </QueryClientProvider>
  );
}

export default App;
