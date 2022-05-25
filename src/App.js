import {Route, Routes} from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import HomeView from "./views/HomeView";
import ListCoursesView from "./views/ListCoursesView";
import ListCartView from "./views/ListCartView";
import LoginView from "./views/LoginView";
import NoMatchLayout from "./layouts/NoMatchLayout";
import CourseDetailView from "./views/CourseDetailView";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<DefaultLayout/>}>
          <Route index element={<HomeView/>}/>
          <Route path="courses" element={<ListCoursesView/>}/>
          <Route path="cart" element={<ListCartView/>}/>
          <Route path="course-detail" element={<CourseDetailView/>}/>
          <Route path="*" element={<NoMatchLayout/>}/>
        </Route>
        <Route path="login" element={<LoginView/>}/>
      </Routes>
    </div>
  );
}

export default App;
