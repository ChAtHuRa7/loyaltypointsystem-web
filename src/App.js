import AddCustomer from "./components/AddCustomer";
import Customers from "./components/Customers";


function App() {
  return (
    <div className="flex justify-between w-full">
      <Customers/>
      <AddCustomer/>
    </div>
  );
}

export default App;
