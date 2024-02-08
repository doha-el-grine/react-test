function App() {

   const name = prompt("Please enter your name:");
   const birthDateStr = prompt("Please enter your birth date (YYYY-MM-DD):");
   const nbrart=prompt("enter you number of article");
   const birthDate = new Date(birthDateStr);
   const currentDate = new Date();
   const date = currentDate.toLocaleDateString();
   const time = currentDate.toLocaleTimeString();

   // Calculate the difference in years
   const yearsAlive = currentDate.getFullYear() - birthDate.getFullYear();


   let remise=null;
   if (nbrart==5){remise=10}

   
   return (<div>
               <p>
                  Hello, {name} !<br></br> 
                  The current date is: {date} <br />
                  and the current time is: {time}.
                  <br />
                  You have now been alive for approximately {yearsAlive} years.
               </p>
               <h1>REMISE IS {remise}%</h1>
          </div>);
}


export default App;


