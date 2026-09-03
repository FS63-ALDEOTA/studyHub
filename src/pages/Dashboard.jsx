import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import SideBar from "../components/SideBar"
// import AsideCourseContent from "../components/AsideCourseContent"

const Dashboard = () => {
  return (
    <>
    <Header/>
    <SideBar/>
      <div className="ml-[15%]">
      <Outlet/>
    </div>
    </>
  )
}

export default Dashboard

