import "./teachers.css";
import { useContext } from "react";
import teachersContext from "../../../context/teachersContext/teachersContext";
import TechersCord from "../../featurs/techersCord/techersCord";


function Teacher() {
  const {  teacher } = useContext(teachersContext);
  return (
    <div className="teacher">
      {teacher.map((teacherItem) => (
        <TechersCord teacher={teacherItem}/>
        // <TechersCord teacher={TechersCord} />
      ))}
    </div>
  );
}

export default Teacher;
