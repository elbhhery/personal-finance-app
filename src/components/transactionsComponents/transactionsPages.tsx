export default function TransactionsPages() {
  return (
    <div className="text-center flex justify-between flex-row px-12 items-center w-full mt-12">
      <button className="transactions-buttons">Prev</button>
      <div className="flex flex-row ">
        <button className="transactions-buttons">1</button>
        <button className="transactions-buttons">2</button>
        <button className="transactions-buttons block md:hidden">...</button>
        <button className="transactions-buttons hidden md:block">3</button>
        <button className="transactions-buttons hidden md:block">4</button>
        <button className="transactions-buttons">5</button>
      </div>
      <button className="transactions-buttons">Next</button>
    </div>
  );
}
