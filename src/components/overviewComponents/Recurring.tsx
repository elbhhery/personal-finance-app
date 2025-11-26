import RArrow from "../../../assets/images/icon-caret-right.svg";
export default function Recurring() {
  return (
    <div className="bg-white rounded-2xl p-6">
      <div className="flex justify-between items-center">
        <h2>Recurring Bills</h2>
        <button className="flex items-center gap-4">
          <span>See Details</span>
          <span>
            <img src={RArrow} alt="" />
          </span>
        </button>
      </div>
      <div className="flex flex-col gap-4 mt-6">
        <div className="rounded-lg border-l-8 border-[#277C78] p-4 bg-[#F8F4F0] flex justify-between">
          <span className="text-[#696868]">Paid Bills</span>
          <span className="text-[19px] font-bold">$190.00</span>
        </div>
        <div className="rounded-lg border-l-8 border-l-[#F2CDAC] p-4 bg-[#F8F4F0] flex justify-between">
          <span className="text-[#696868]">Total Upcoming</span>
          <span className="text-[19px] font-bold">$194.98</span>
        </div>
        <div className="rounded-lg border-l-8 border-l-[#82C9D7] p-4 bg-[#F8F4F0] flex justify-between">
          <span className="text-[#696868]">Due Soon</span>
          <span className="text-[19px] font-bold">$59.98</span>
        </div>
      </div>
    </div>
  );
}
