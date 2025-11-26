import RArrow from "../../../assets/images/icon-caret-right.svg";
import BudgetChart from "../overviewComponents/BudgetChart";
import Recurring from "../overviewComponents/Recurring";
import Balance from "../overviewComponents/balance";
import PotsComponent from "../overviewComponents/potsComponent";
import TransactiosComponent from "../overviewComponents/taransactionsComponent";
export default function Overview() {
  return (
    <>
      <div className="md:px-12 px-7 py-8 w-full">
        <Balance />
        <div className="flex flex-col lg:flex-row gap-4 w-full mt-8">
          <div className="w-full">
            <PotsComponent />
            <TransactiosComponent />
          </div>
          {/* Chart Section */}
          <div className="w-full">
            <div className="bg-white rounded-2xl p-6 mb-4">
              <div className="flex justify-between items-center">
                <h2>Budgets</h2>
                <button className="flex items-center gap-4">
                  <span>See Details</span>
                  <span>
                    <img src={RArrow} alt="" />
                  </span>
                </button>
              </div>
              <div className="flex mt-6 items-center justify-around flex-col lg:flex-row gap-18">
                <div className="data">
                  <BudgetChart />
                </div>
                <div className="flex justify-between w-full md:w-auto md:flex-col">
                  <div className="flex flex-col">
                    <div className="before-border mb-2 relative pl-5 before:h-14! before:bg-[#277C78] flex gap-1.5 flex-col ">
                      <span className="text-[#696868]">Entertainment</span>
                      <span className="text-[19px] font-bold">$50</span>
                    </div>
                    <div className="before-border mb-2 relative pl-5 before:h-14! before:bg-[#82C9D7] flex gap-1.5 flex-col ">
                      <span className="text-[#696868]">Bills</span>
                      <span className="text-[19px] font-bold">$750.00</span>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <div className="before-border mb-2 relative pl-5 before:h-14! before:bg-[#F2CDAC] flex gap-1.5 flex-col ">
                      <span className="text-[#696868]">Dining Out</span>
                      <span className="text-[19px] font-bold">$75.00</span>
                    </div>
                    <div className="before-border mb-2 relative pl-5 before:h-14! before:bg-[#626070] flex gap-1.5 flex-col ">
                      <span className="text-[#696868]">Personal Care</span>
                      <span className="text-[19px] font-bold">$100.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Recurring />
          </div>
        </div>
      </div>
    </>
  );
}
