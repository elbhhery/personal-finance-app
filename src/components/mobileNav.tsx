import home from "../../assets/images/icon-nav-overview.svg";
import Transactions from "../../assets/images/icon-nav-transactions.svg";
import Budget from "../../assets/images/icon-nav-budgets.svg";
import Posts from "../../assets/images/icon-nav-pots.svg";
import Recurring from "../../assets/images/icon-nav-recurring-bills.svg";
export default function MobNav({
  setActivePage,
  activePage,
}: {
  setActivePage: (page: string) => void;
  activePage: string;
}) {
  return (
    <nav className="block lg:hidden  rounded-t-2xl fixed w-full bottom-0 bg-black p-6 z-50">
      <ul className="flex justify-around items-center">
        <li
          onClick={() => setActivePage("overview")}
          className={`cursor-pointer font-bold text-[19px] ${
            activePage === "overview" ? "selected-page-mobile text-black" : ""
          } align-center relative`}
        >
          <span>
            <img src={home} alt="" />
          </span>
        </li>
        <li
          onClick={() => setActivePage("transactions")}
          className={`cursor-pointer font-bold text-[19px] ${
            activePage === "transactions"
              ? "selected-page-mobile text-black"
              : ""
          } align-center relative`}
        >
          <span>
            <img src={Transactions} alt="" />
          </span>
        </li>
        <li
          onClick={() => setActivePage("budget")}
          className={`cursor-pointer font-bold text-[19px] ${
            activePage === "budget" ? "selected-page-mobile text-black" : ""
          } align-center relative`}
        >
          <span>
            <img src={Budget} alt="" />
          </span>
        </li>
        <li
          onClick={() => setActivePage("Pots")}
          className={`cursor-pointer font-bold text-[19px] ${
            activePage === "Pots" ? "selected-page-mobile text-black" : ""
          } align-center relative`}
        >
          <span>
            <img src={Posts} alt="" />
          </span>
        </li>
        <li
          onClick={() => setActivePage("Recurring")}
          className={`cursor-pointer font-bold text-[19px]   ${
            activePage === "Recurring" ? "selected-page-mobile text-black" : ""
          } align-center relative`}
        >
          <span>
            <img src={Recurring} alt="" />
          </span>
        </li>
      </ul>
    </nav>
  );
}
