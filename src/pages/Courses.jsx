import { useState, useEffect } from "react";

import Banner from "../components/Banner";
import AsideCourseContent from "../components/AsideCourseContent";

const Courses = () => {
 

  return (
    <div>
      <h1>Meus cursos</h1>

      <Banner />

      <AsideCourseContent />
    </div>
  );
};

export default Courses;
