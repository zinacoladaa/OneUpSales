import CommissionWidget from "./components/CommissionWidget";

function App() {
  return (
   <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <h1 className="text-4xl font-extrabold text-blue-700 mb-8 drop-shadow-sm">
        OneUp Sales
      </h1>
      <div>
        <CommissionWidget />
      </div>
    </div>
  );
}

export default App;
