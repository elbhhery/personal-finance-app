import Saved from "../../../assets/images/icon-pot.svg";
import RArrow from "../../../assets/images/icon-caret-right.svg";
export default function PotsComponent() {
  return (
    <div className="p-4 md:p-8 rounded-2xl bg-white">
      <div className="flex justify-between mb-4">
        <h3>Pots</h3>
        <button className="flex items-center justify-center gap-2 text-[#696868]">
          <span>See Details</span>
          <img src={RArrow} alt="" />
        </button>
      </div>
      <div className="flex flex-col md:flex-row gap-4 md:gap-8">
        <div className="flex  p-6 items-center rounded-2xl bg-[#F8F4F0] w-full lg:w-auto">
          <img src={Saved} alt="" />
          <div className="flex flex-col ml-4 gap-2">
            <span className="text-[#696868]">Total Saved</span>
            <span className="font-bold text-2xl">$850</span>
          </div>
        </div>
        <div className="mt-6 flex flex-row gap-8 w-full md:w-auto">
          <div className="relative flex gap-12 flex-col w-full md:w-auto">
            <div className="before-border before:bg-[#277C78] flex gap-1.5 flex-col justify-center ml-8">
              <span className="text-[#696868]">Savings</span>
              <span className="text-2xl font-semibold">$159</span>
            </div>
            <div className="before-border before:bg-[#626070] justify-center flex flex-col ml-8 gap-1.5">
              <span className="text-[#696868]">Concert Ticket</span>
              <span className="text-2xl font-semibold">$110</span>
            </div>
          </div>
          {/*  */}
          <div className="relative flex gap-12 flex-col w-full md:w-auto">
            {" "}
            <div className="before-border before:bg-[#82C9D7] justify-center flex flex-col gap-1.5 ml-8">
              <span className="text-[#696868]">Gift</span>
              <span className="text-2xl font-semibold">$40</span>
            </div>
            <div className="before-border before:bg-[#F2CDAC] justify-center flex flex-col gap-1.5 ml-8">
              <span className="text-[#696868]">New Laptop</span>
              <span className="text-2xl font-semibold">$10</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
