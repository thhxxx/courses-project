import {Route, Routes} from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import Home from "./views/Home";
import ListCourses from "./views/ListCourses";
import ListCart from "./views/ListCart";
import Login from "./views/Login";
import NoMatch from "./layouts/NoMatch";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<DefaultLayout/>}>
          <Route index element={<Home/>}/>
          <Route path="courses" element={<ListCourses/>}/>
          <Route path="cart" element={<ListCart/>}/>
        </Route>
        <Route path="login" element={<Login/>}/>
        <Route path="*" element={<NoMatch/>}/>
      </Routes>
    </div>
  );
}

export default App;
