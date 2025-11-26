import searchIcon from "../../../assets/images/icon-search.svg";
import CaretDown from "../../../assets/images/icon-filter-mobile.svg";
import sort from "../../../assets/images/icon-sort-mobile.svg";
import CustomSelect from "../../shared/dropDown";
export default function TransactionsHeaders() {
  const options = ["Latest", "Oldest", "A to Z", "Highest", "Lowest"];
  const CategoryOptions = [
    "All Transactios",
    "Entertainment",
    "Bills",
    "Groceries",
    "Dinning Out",
    "Transportation",
    "Personal Care",
  ];
  const handleSort = (value: string) => {
    console.log("Selected:", value);
  };

  return (
    <>
      <header className="mt-8 md:p-6 flex justify-between items-center gap-4">
        <div className="relative">
          <input
            type="search"
            name="search"
            id=""
            className="p-4 focus:border-0 border border-[#98908B] rounded-2xl"
            placeholder="Search transactions"
          />
          <div className=" absolute right-5 top-1/2 -translate-y-1/2 text-gray-400">
            <img src={searchIcon} alt="" />
          </div>
        </div>
        <div className="justify-between gap-4 hidden md:flex">
          <div className="flex items-center">
            <p className="mr-4 w-13">Sort By</p>
            <CustomSelect options={options} onChange={handleSort} />
          </div>
          <div className="flex items-center">
            <span className="mr-4">Category</span>
            <CustomSelect options={CategoryOptions} onChange={handleSort} />
          </div>
        </div>
        {/*  */}
        <div className="block md:hidden">
          <img src={sort} alt="" />
        </div>
        <div className="block md:hidden">
          <img src={CaretDown} alt="" />
        </div>
      </header>
      {/*  */}
      <header className="mt-8 p-6 border-b border-[#E3E3E3] pb-4 hidden md:flex">
        <div className="text-[#696868] flex-1">Recipient /Sender</div>
        <div className="text-[#696868] flex items-center flex-1 justify-around text-center">
          <div>Category</div>
          <div>Transaction Date</div>
        </div>
        <div className="text-[#696868] flex-1 text-right">Amount</div>
      </header>
    </>
  );
}
