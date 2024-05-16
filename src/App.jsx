import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Homepage from "./pages/Homepage";
import SalesScreen from "./pages/SalesScreen";
import PaymentScreen from "./pages/PaymentScreen";
import ProductsScreen from "./pages/ProductsScreen";
import SettingsScreen from "./pages/SettingsScreen";
import { ProductsProvider } from "./context/ProductsContext";
import { ShopInfoProvider } from "./context/ShopInfoContext";

function App() {
  return (
    <ProductsProvider>
      <ShopInfoProvider>
        <BrowserRouter>
          <Routes>
            <Route path="login" element={<Login />} />
            <Route index element={<Navigate replace to="homepage" />} />
            <Route path="homepage" element={<Homepage />} />
            <Route path="sale" element={<SalesScreen />} />
            <Route path="payment" element={<PaymentScreen />} />
            <Route path="products" element={<ProductsScreen />} />
            <Route path="settings" element={<SettingsScreen />} />
          </Routes>
        </BrowserRouter>
      </ShopInfoProvider>
    </ProductsProvider>
  );
}

export default App;
