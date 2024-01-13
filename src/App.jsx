import { useState } from "react";
import "./App.css";
import AddData from "./components/AddData";
import ShowData from "./components/ShowData";

function App() {
  const [currentItem, setCurrentItem] = useState(null);
  return (
    <div className="App p-5">
      <h1 className="font-bold text-center text-3xl mb-5">
        Lista Cualquier Cliente
      </h1>
      <div className="flex flex-col gap-10">
        <AddData currentItem={currentItem} setCurrentItem={setCurrentItem} />
        <ShowData setCurrentItem={setCurrentItem} />
      </div>
    </div>
  );
}

export default App;
