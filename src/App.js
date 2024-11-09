import AddCustomer from "./components/AddCustomer";
import Customers from "./components/Customers";
import Divider from "./components/Divider";

function App() {
  return (
    <div className="px-20 py-10 h-screen overflow-y-hidden flex flex-col">
      <h1 className="text-gray-700 font-bold text-xl pb-10">
        ABC Customer Rewards
      </h1>
      <div className="flex justify-between w-full h-full">
        <Customers />
        <Divider />
        <AddCustomer />
      </div>
    </div>
  );
}

export default App;
