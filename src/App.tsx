import Home from "./pages/Home/Home";
import {QueryClientProvider,QueryClient} from "react-query"

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <div className="App">
      <Home/>
    </div>
    </QueryClientProvider>
  );
}

export default App;
