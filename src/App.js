import {Route, Routes} from "react-router-dom";
import DefaultLayout from "./Layouts/DefaultLayout";
import Home from "./views/Home";
import Courses from "./views/Courses";
import Cart from "./views/Cart";
import Login from "./views/Login";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<DefaultLayout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="courses" element={<Courses/>}/>
                    <Route path="cart" element={<Cart/>}/>
                </Route>
                <Route path="login" element={<Login/>}/>
            </Routes>
        </div>
    );
}

export default App;
