import "./teachersContext.css";
import { createContext, useState,useEffect } from "react";
import getTecher from "../../servises/techersJson"

export const TeachersContext = createContext();
function teachersContext({Children}) {
  const [teacherURL, setTeacherURL]= useState([])
  useEffect(()=>{
    getTecher ("teacherURL").then(res => setTeacherURL(rea))
  },[])
  return (
    <TeachersContext.Provider value={{teacherURL, setTeacherURL}}>
      {Children}
    </TeachersContext.Provider>

  );
}

export default teachersContext;

