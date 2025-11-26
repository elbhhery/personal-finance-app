import dayjs from "dayjs";
import Data from "../../../data.json";
import priceFormat from "../../lib/priceFormater";
export default function TransactionsDetails({
  transPage,
}: {
  transPage: number;
}) {
  const ItemsPerPage = 10;
  const startIndex = (transPage - 1) * ItemsPerPage;
  const endIndex = startIndex + ItemsPerPage;
  const SlicedRow = Data.transactions.slice(startIndex, endIndex);
  return (
    <div className="mt-4 md:p-4">
      {SlicedRow.map((transferData, index) => {
        const isLast = index === SlicedRow.length - 1;
        return (
          <div
            key={index}
            className={`flex items-center ${
              isLast ? "" : "border-b"
            } border-[#696868] py-4`}
          >
            <div className="flex items-center flex-1">
              <img
                src={transferData.avatar}
                alt={transferData.name}
                className="rounded-[50%] w-10 block"
              />
              <div className="flex flex-col ml-4">
                <span>{transferData.name}</span>
                <span className="md:hidden text-[#696868]">
                  {transferData.category}
                </span>
              </div>
            </div>
            <div className="hidden md:flex justify-around flex-1 text-[#696868]">
              <span className="md:inline hidden">{transferData.category}</span>

              <span>{dayjs(transferData.date).format("DD MMM YYYY")} </span>
            </div>
            <div className="flex flex-col text-right gap-2 flex-1">
              <span
                className={`${
                  transferData.amount > 0 ? "text-[#277C78]" : "text-red-500"
                }  font-bold`}
              >
                {priceFormat(transferData.amount)}
              </span>
              <span className="text-[#696868]">
                {" "}
                {dayjs(transferData.date).format("DD MMM YYYY")}{" "}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
