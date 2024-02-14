import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const tcar = useSelector((data) => data.tcar);
  const dispatch = useDispatch();
  const [idc, setIdc] = React.useState("");
  const [modelc, setModelc] = React.useState("");
  const [marquec, setMarquec] = React.useState("");


  return (<div>
    <input type="text" value={idc} onChange={(e)=>setIdc(e.target.value)}/>
    <input type="text" value={modelc} onChange={(e)=>setModelc(e.target.value)}/>
    <input type="text" value={marquec} onChange={(e)=>setMarquec(e.target.value)}/>
    <button onClick={() => {dispatch({ type: "add",  payload: { id: idc, marque: marquec, model: modelc }});setIdc('');setMarquec('');setModelc('');}}>Add</button>
    <button onClick={() => {dispatch({type: "update",payload: { id: idc, marque: marquec, model: modelc }});setIdc('');setMarquec('');setModelc('');}}>Update</button>
    <br />
    <br />
    <input type="text" value={idc} onChange={(e)=>setIdc(e.target.value)}/>
    <button onClick={()=>{dispatch({type:"search",payload:{id: idc, marque: marquec, model: modelc}});setIdc('');setMarquec('');setModelc('');}}>search</button>
    {tcar.map((a) => (<p key={a.id}>car {a.model} model {a.marque}</p>))}


      <table border="1">
        <thead>
          <tr>
            <th>Model</th>
            <th>Marque</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tcar.map((car) => (
            <tr key={car.id}>
              <td>{car.model}</td>
              <td>{car.marque}</td>
              <td>
                <button onClick={() => dispatch({ type: "remove", payload: car.id })}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;