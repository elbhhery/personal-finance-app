import { useState } from "react";
import home from "../../assets/images/icon-nav-overview.svg";
import Transactions from "../../assets/images/icon-nav-transactions.svg";
import Budget from "../../assets/images/icon-nav-budgets.svg";
import Posts from "../../assets/images/icon-nav-pots.svg";
import Recurring from "../../assets/images/icon-nav-recurring-bills.svg";
import minimize from "../../assets/images/icon-minimize-menu.svg";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import MobNav from "./mobileNav";
export default function NavBar({
  setActivePage,
  activePage,
}: {
  setActivePage: (page: string) => void;
  activePage: string;
}) {
  const [miniNav, setMiniNav] = useState(false);

  return (
    <>
      <MobNav setActivePage={setActivePage} activePage={activePage} />
      <div
        className={`${
          miniNav ? "w-[100px]" : "w-[250px]"
        } rounded-r-2xl bg-[#201F24] hidden lg:block`}
      >
        <div className="h-screen text-[#B3B3B3] lg:w-[300px] pt-6 pr-8">
          <h2
            className={`text-white font-bold pl-6 ${
              miniNav ? "hidden!" : "block"
            } lg:block hidden`}
          >
            finance
          </h2>
          <nav className="flex flex-col justify-between h-[90%]">
            <ul className="nav-ul mt-12 flex flex-col gap-12 relative">
              <li
                onClick={() => setActivePage("overview")}
                className={`cursor-pointer font-bold text-[19px] ${
                  activePage === "overview"
                    ? "selected-page text-black"
                    : "before:w-0!"
                } ${miniNav ? "before:w-16" : "before:w-56"}`}
              >
                <span>
                  <img src={home} alt="" />
                </span>
                <span className={`${miniNav ? "hidden" : "inline"}`}>
                  Overview
                </span>
              </li>
              <li
                onClick={() => setActivePage("transactions")}
                className={`cursor-pointer font-bold text-[19px] ${
                  activePage === "transactions"
                    ? "selected-page text-black"
                    : "before:w-0!"
                } ${miniNav ? "before:w-16" : "before:w-56"}`}
              >
                <span>
                  <img src={Transactions} alt="" />
                </span>
                <span className={`${miniNav ? "hidden" : "inline"}`}>
                  Transactions
                </span>
              </li>
              <li
                onClick={() => setActivePage("budget")}
                className={`cursor-pointer font-bold text-[19px] ${
                  activePage === "budget"
                    ? "selected-page text-black"
                    : "before:w-0!"
                } ${miniNav ? "before:w-16" : "before:w-56"}`}
              >
                <span>
                  <img src={Budget} alt="" />
                </span>
                <span className={`${miniNav ? "hidden" : "inline"}`}>
                  Budget
                </span>
              </li>
              <li
                onClick={() => setActivePage("Pots")}
                className={`cursor-pointer font-bold text-[19px] ${
                  activePage === "Pots"
                    ? "selected-page text-black"
                    : "before:w-0!"
                } ${miniNav ? "before:w-16" : "before:w-56"}`}
              >
                <span>
                  <img src={Posts} alt="" />
                </span>
                <span className={`${miniNav ? "hidden" : "inline"}`}>Pots</span>
              </li>
              <li
                onClick={() => setActivePage("Recurring")}
                className={`cursor-pointer font-bold text-[19px]   ${
                  activePage === "Recurring"
                    ? "selected-page text-black"
                    : "before:w-0!"
                } ${miniNav ? "before:w-16" : "before:w-56"}`}
              >
                <span>
                  <img src={Recurring} alt="" />
                </span>
                <span className={`${miniNav ? "hidden" : "inline"}`}>
                  Recurring Bills
                </span>
              </li>
            </ul>
            <ul className="hidden lg:block">
              <li className="ml-8">
                <button onClick={() => setMiniNav(!miniNav)}>
                  <span
                    className={`${
                      miniNav ? "hidden" : "flex"
                    } mr-4 gap-4 items-center`}
                  >
                    <img src={minimize} alt="" />
                    <span> Minimize Menu</span>
                  </span>
                  <span className={`${miniNav ? "inline" : "hidden"}`}>
                    {" "}
                    <DoubleArrowIcon />
                  </span>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
