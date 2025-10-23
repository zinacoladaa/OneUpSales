import CommissionWidget from "./components/CommissionWidget";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center ">
      <h1 className="text-2xl">
        OneUp Commission Widget
      </h1>

      <div>
        <CommissionWidget />
      </div>
    </div>
  );
}

export default App;
