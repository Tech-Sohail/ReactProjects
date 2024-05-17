import "./App.css";
import User from "./components/User";
import UserFormHook from "./components/UserFormHook";
import UserFormHookWithPrepopulatedData from "./components/UserFormHookWithPrepopulatedData";

function App() {
  return (
    <div className="App">
      {/* <User /> */}
      {/* <UserFormHook /> */}
      <UserFormHookWithPrepopulatedData />
    </div>
  );
}

export default App;
