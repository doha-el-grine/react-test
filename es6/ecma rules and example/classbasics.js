const Etablissement='ISGI';
//declare class in mjs
class Etudiant{
   constructor(nom,age){
   this.nom=nom;
   this.age=age
   }

   //display 
   info(){
      return `student name :${this.nom} age : ${this.age}`
   }
   }

   //create object inside classe
   let et1= new Etudiant("Rami",23);
   console.log(et1.info());
   let et2= new Etudiant("Karimi",21);
   console.log(et2.info());



   //legacy
   class inter extends Etudiant{
      constructor(nom,age,intership){
         super(nom,age),
         this.intership=intership
      }

      //return info from mother class with legacy
      info(){
         return`${super.info()} this inter in this intership : ${this.intership}`
      }
   }

   //files object inside calss
   let st1=new inter ("rebikah micklson",32 , "new orleans"); 
   let st2=new inter ("klaus ",30 , "mestic grid");
   let st3=new inter ("elijah",43 , " louisiana");
   let st4=new inter ("heyly jackson",24 , "mystic falls");
   //show it in browser like html file
   document.body.innerHTML += st1.info() +"<br>"+ st2.info()+"<br>" + st3.info() +"<br>"+ st4.info();

   //display=affichage
   console.log(st2.info());
   console.log(st3.info());
   console.log(st4.info());
   console.log(Etablissement)
   //type exportation
   export default Etudiant
   export  {Etudiant,Etablissement}
  

