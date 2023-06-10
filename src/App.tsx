import { Layout } from 'antd';
import AppHeader from './component/AppHeader';
import { useEffect } from "react";
import MyFooter from "./component/Footer/MyFooter";
import { useStore } from "./Store/UseStore";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Products from "./component/Products";
import About from "./component/AboutAni";

const App = () => {
    const context = useStore();

    useEffect(() => {
        context?.setItems();
    }, []);

    return (
        <BrowserRouter>
            <Layout className="layout">
                <div className="header">
                    <NavLink to='/'>Главное</NavLink>
                    <NavLink to='/products'>Продукты</NavLink>
                    <NavLink to='/about'>О Нас</NavLink>
                </div>
                <Routes>
                    <Route path='/' element={<AppHeader />} />
                    <Route path='/products' element={<Products />} />
                    <Route path='/about' element={<About />} />
                </Routes>
                <MyFooter />
            </Layout>
        </BrowserRouter>
    );
};

export default App;
