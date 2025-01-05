import {Navigate, Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage.tsx';
import {PersonalCabinetPage, ProductPage, ProductsPage, WhishListPage} from "./pages";
import routePath from "./consts/routePath.ts";


const App = () => {
    return (<Routes>

        <Route path={routePath.HOME} element={<HomePage/>}/>
        <Route path={routePath.PRODUCTS} element={<ProductsPage/>}/>
        <Route path={routePath.WISHLIST} element={<WhishListPage/>}/>
        <Route path={routePath.PRODUCT} element={<ProductPage/>}/>
        <Route path={routePath.PROFILE} element={<PersonalCabinetPage/>}/>
        <Route path="*" element={<Navigate to={'/'}/>}/>
    </Routes>);
};

export default App;