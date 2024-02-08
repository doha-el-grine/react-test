class Document {
   constructor(id, date_edition) {
       this.id = id;
       this.date_edition = date_edition; 
   }
}

class Livre extends Document {
   constructor(id, date_edition, title, auteur) {
       super(id, date_edition);
       this.title = title; 
       this.auteur = auteur;
   }
}

function  display(){
   return `id this book is : ${this.id} and date edition is : ${this.date_edition} of livre title : ${this.title} of this autor : ${this.auteur}`
}

let Doc1 = new Document(1, '22/08/2003');
let Doc2 = new Document(2, '02/10/2023');

let Liv1 = new Livre(Doc1.id, Doc1.date_edition, 'the originals vampire', 'klaus maicklson');
let Liv2 = new Livre(Doc2.id, Doc2.date_edition, 'the vampire diaries', 'demon salvatore');

console.log(display.call(Liv1));
console.log(display.call(Liv2));