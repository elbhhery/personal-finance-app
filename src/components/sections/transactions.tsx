import { useState } from "react";
import TransactionsButtons from "../transactionsComponents/transactionsButtons";
import TransactionsDetails from "../transactionsComponents/transactiosDetails";
import TransactionsHeaders from "../transactionsComponents/transHeader";
export default function Transactions() {
  const [transPage, setTransPage] = useState(1);
  return (
    <div className="md:px-8 px-7 py-8 bg-white w-full mb-16">
      <h2>Transactions</h2>
      <div>
        <TransactionsHeaders />
        <TransactionsDetails transPage={transPage} />
        <TransactionsButtons
          transPage={transPage}
          setTransPage={setTransPage}
        />
      </div>
    </div>
  );
}
