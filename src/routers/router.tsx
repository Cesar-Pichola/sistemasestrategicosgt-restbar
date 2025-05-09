import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import LoginPage from "../page/login";
import Layout from "../layout/";
import RestaurantPage from "../page/restaurant";
import KitchenView from "../page/kitchen_orders_view";
import TablesPage from "../page/Tables";
import CategoriesPage from "../page/Categories";

function RoutersApp() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/restauran" element={<Layout />}>
        <Route path="restauran" element={<RestaurantPage />} />
        <Route path="kitchenorder" element={<KitchenView />} />
        <Route path="tables" element={<TablesPage/>}/>
        <Route path="categories" element={<CategoriesPage/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default RoutersApp;
