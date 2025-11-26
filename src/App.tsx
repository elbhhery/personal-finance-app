import { Routes, Route } from "react-router";
import { useState } from "react";
import SignUp from "./pages/signUp";
import LogInPage from "./pages/logIn";
import NavBar from "./components/NavigationBar";
import Transactions from "./components/sections/transactions";
import Budget from "./components/sections/budget";
import Overview from "./components/sections/overview";
import Recurring from "./components/sections/recurring";
import Pots from "./components/sections/pots";
import "./App.css";

function App() {
  const [activePage, setActivePage] = useState("overview");
  const renderPage = () => {
    switch (activePage) {
      case "overview":
        return <Overview />;
      case "transactions":
        return <Transactions />;
      case "budget":
        return <Budget />;
      case "Pots":
        return <Pots />;
      case "Recurring":
        return <Recurring />;
      default:
        return <Overview />;
    }
  };

  return (
    <>
      <Routes>
        <Route element={<SignUp />} path="/" />
        <Route element={<LogInPage />} path="/logIn" />
        <Route
          path="/home"
          element={
            <div className="flex">
              <NavBar setActivePage={setActivePage} activePage={activePage} />
              <main className="grow p-6">{renderPage()}</main>
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default App;
