import Data from "../../../data.json";

export default function TransactionsButtons({
  transPage,
  setTransPage,
}: {
  transPage: number;
  setTransPage: (page: number) => void;
}) {
  const ITEMS_PER_PAGE = 10;
  const maxPage = Math.ceil(Data.transactions.length / ITEMS_PER_PAGE);

  return (
    <div className="text-center flex justify-between flex-row px-12 items-center w-full mt-12">
      {/* Prev button */}
      <button
        className="transactions-buttons"
        onClick={() => setTransPage(Math.max(transPage - 1, 1))}
        disabled={transPage === 1}
      >
        Prev
      </button>

      {/* Page numbers */}
      <div className="flex flex-row gap-2">
        {Array.from({ length: maxPage }, (_, i) => i + 1).map((num) => (
          <button
            key={num}
            className={`transactions-buttons ${
              transPage === num ? "bg-black text-white" : ""
            }`}
            onClick={() => setTransPage(num)}
          >
            {num}
          </button>
        ))}
      </div>

      {/* Next button */}
      <button
        className="transactions-buttons"
        onClick={() => setTransPage(Math.min(transPage + 1, maxPage))}
        disabled={transPage === maxPage}
      >
        Next
      </button>
    </div>
  );
}
