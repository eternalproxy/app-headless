import Dashboard from "./pages/Dashboard";
import { DialogProvider } from "./components/dialog";
import { StylesProvider } from "./components/styles/StylesProvider";
import { useState } from "react";
import { Footer, Header } from "./partials";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactTooltip from "react-tooltip";

let activeTheme = "light";

const themeStorage = localStorage.getItem("theme");

if (themeStorage) {
  activeTheme = themeStorage;
} else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  activeTheme = "dark";
}

document.documentElement.setAttribute("data-theme", activeTheme);

const App = () => {
  const [userTheme, setUserTheme] = useState(activeTheme);

  const handleChangeTheme = () => {
    const nextTheme = userTheme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", nextTheme);
    localStorage.setItem("theme", nextTheme);
    setUserTheme(nextTheme);
  };

  return (
    <StylesProvider userTheme={userTheme}>
      <>
        <ToastContainer />
        <ReactTooltip />
        <DialogProvider>
          <>
            <Header onChangeTheme={handleChangeTheme} />
            <Dashboard />
            <Footer />
          </>
        </DialogProvider>
      </>
    </StylesProvider>
  );
};

export default App;
