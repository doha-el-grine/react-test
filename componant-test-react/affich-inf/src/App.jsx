import React from 'react';
import {useState} from 'react';


function Inscription() {
  const [name,setname]=useState()
  const [lstname,setlstname]=useState()
  const [inf,setinf]=useState()


  function envoyer(){
    setinf(`name:${name} laste name:${lstname}`)
  }

  return(
    <div>
      <form>
      <label>Nom:</label><input type="text" onChange={(e)=>{setname(e.target.value.toUpperCase())}}/>
      <label>Prenom:</label><input type="text" onChange={(e)=>{setlstname(e.target.value.toUpperCase())}}/>
      <button type='button' onClick={envoyer}>Afficher</button>
      <p>{inf}</p>


      </form>
    </div>
  )
}

export default Inscription;
