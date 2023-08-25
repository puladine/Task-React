import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./component/Layout";
import Customer from "./component/Customer";
import List from "./component/List";
import NoPage from "./component/404";
function App() {
  return (
    
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Customer />} />
          <Route path="List" element={<List />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
