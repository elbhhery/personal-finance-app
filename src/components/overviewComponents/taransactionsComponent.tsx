import data from "../../../data.json";
import dayjs from "dayjs";
import priceFormat from "../../lib/priceFormater";
import RArrow from "../../../assets/images/icon-caret-right.svg";
export default function TransactiosComponent() {
  const transactions = data.transactions.map((transData) => {
    return transData;
  });
  const transData = transactions.slice(0, 5);
  return (
    <div className="mt-4 rounded-2xl bg-white md:p-8 p-4">
      {" "}
      <div className="flex justify-between mb-4">
        <h3>Transactions</h3>
        <button className="flex items-center justify-center gap-2 text-[#696868]">
          <span>View All</span>
          <img src={RArrow} alt="" />
        </button>
      </div>
      <div>
        {transData.map((transferedData, index) => {
          const isLast = index === transData.length - 1;
          return (
            <div
              key={index}
              className={`flex justify-between items-center ${
                isLast ? "" : "border-b"
              } border-[#696868] py-4`}
            >
              <div className="flex items-center">
                <img
                  src={transferedData.avatar}
                  alt="Emma"
                  className="rounded-[50%] w-10 block"
                />
                <span className="ml-4">{transferedData.name}</span>
              </div>
              <div className="flex flex-col text-right gap-2">
                <span
                  className={`${
                    transferedData.amount > 0
                      ? "text-[#277C78]"
                      : "text-red-500"
                  }  font-bold`}
                >
                  {priceFormat(transferedData.amount)}
                </span>
                <span className="text-[#696868]">
                  {dayjs(transferedData.date).format("D MMM YYYY")}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
