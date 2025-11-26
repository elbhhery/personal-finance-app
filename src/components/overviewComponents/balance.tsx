import data from "../../../data.json";
import priceFormat from "../../lib/priceFormater";
export default function Balance() {
  const Data = data.balance;

  return (
    <>
      <h2 className="mb-4">Overview</h2>
      <div className="flex gap-6 w-full justify-around flex-col md:flex-row">
        <div className="bg-black text-white p-6 rounded-2xl w-full">
          <p className="mb-3">Current Balance</p>
          <span className="text-3xl font-bold">
            {priceFormat(Data.current)}
          </span>
        </div>
        <div className="w-full bg-white p-6 rounded-2xl">
          <p className="mb-3">Income</p>
          <span className="text-3xl font-bold">{priceFormat(Data.income)}</span>
        </div>
        <div className="w-full bg-white p-6 rounded-2xl">
          <p className="mb-3">Expenses</p>
          <span className=" text-3xl font-bold">
            {priceFormat(Data.expenses)}
          </span>
        </div>
      </div>
    </>
  );
}
