import React from "react";
import Card from "./Card";
import Mydata from "./Mydata";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
  <>
    <h2 className="text-center bg-info text-dark p-sm-3">Best Series Netflix & Amezon Prime</h2>
    <div className="container">
    <div className="row">
       {Mydata.map((value,index) =>(
         <div className="col-md-3" key={index}>
             <Card imgsrc={value.imgsrc} 
                   title={value.title} 
                   sname={value.sname}
                   links={value.links} />
                  </div>))}</div></div>
  </>
  );
}

export default App;
