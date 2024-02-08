const personne={
                name:"fatihi",
                years:23,
                adr: { street:14, city:"casa"}
               };


   //normal syntax   

   // const name = personne.name;
   // const years = personne.years;
   // const street = personne.adr.street;
   // const city = personne.adr.city;

   // console.log(name,years,street,city)
   

   //with distructing object

   const {name,years,adr:{street},adr:{city}}=personne
   console.log(name,years,street,city)

   //whit function
   function presentation({name,years,adr:{street},adr:{city}}){
   console.log("salut ",name,years,street,city)
   }
   presentation(personne)
   