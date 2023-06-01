import New from "./pages/new/New";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/theme/darkModeContext";
import DefaultLayout from "./components/defaultLayout/DefaultLayout";
import { publicRoutes } from "./routes/routes";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthProvider from "./context/authentication/authProvider";
import Login from "./pages/Login";
import Home from "./pages/home/Home";
import AppProvider from "./context/authentication/appProvider";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <Router>
      <AuthProvider>
        <AppProvider>
          <div className={darkMode ? "app dark" : "app"}>
            <Routes>
              {publicRoutes.map((route, index) => {
                const Page = route.component;
                let Layout = DefaultLayout;
  
                if (route.layout) {
                  Layout = route.layout;
                } else if (route.layout === null) {
                  Layout = DefaultLayout;
                }
  
                return (
                  <Route
                    key={index}
                    path={route.path}
                    element={
                      <Layout>
                        <Page />
                      </Layout>
                    }
                  />
                );
              })}
            </Routes>
          </div>
        </AppProvider>
      </AuthProvider>
    </Router>

  );
}

export default App;
