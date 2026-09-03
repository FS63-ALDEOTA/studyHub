
import Banner from "../components/Banner.jsx";
import { Outlet } from "react-router-dom";

const Courses = () => {

  return (
    <div className=" pb-6">
  
      <Banner />
      <div className="p-4">
      <Outlet/>
      </div>
    </div>
  );
};

export default Courses;