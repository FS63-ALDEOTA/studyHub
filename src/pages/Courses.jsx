import { useState, useEffect } from "react";

import Banner from "../components/Banner";
import AsideCourseContent from "../components/AsideCourseContent";

const Courses = () => {
 

  return (
    <div>
      <h1>Meus cursos</h1>

      <Banner />
   {cursosDoUsuario.length > 0 && <Banner dados={cursosDoUsuario[0]} />} 
      <AsideCourseContent />
    </div>
  );
};

export default Courses;
