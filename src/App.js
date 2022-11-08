import AppContextProvider from "./context/auth-context";
import Routing from "./routing/Routing";

function App() {
  return (
    <AppContextProvider>
      <Routing></Routing>
    </AppContextProvider>
  );
}

export default App;
