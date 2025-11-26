import TransactionsPages from "../transactionsComponents/transactionsPages";
import TransactionsDetails from "../transactionsComponents/transactiosDetails";
import TransactionsHeaders from "../transactionsComponents/transHeader";
export default function Transactions() {
  return (
    <div className="md:px-8 px-7 py-8 bg-white w-full">
      <h2>Transactions</h2>
      <div>
        <TransactionsHeaders />
        <TransactionsDetails />
        <TransactionsPages />
      </div>
    </div>
  );
}
