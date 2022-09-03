// import "./techrsCord.css";

function TechersCord({teacher}) {
  const {firstName, lastname,pohnNumber,picture} = teacher;
  return (
    <div className="techrs-cord">
      <img src= {picture} alt="" />
      <h1>{firstName}</h1>
      <h1>{lastname}</h1>
      <h1>{pohnNumber}</h1>
      
    </div>
  );
};

export default TechersCord;
