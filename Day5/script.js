class Movie{
    constructor (title,studio,rating="PG"){
        this.title=title;
        this.studio=studio;
        this.rating=rating;
       
        }
        getPG(movie) {
            if(this.rating == "PG"){
                return (`the movie which has rating PG is ${this.title}`);
            }
        }
    }
      
    
    


const mine = new Movie("Leo","jsstudio","PG");
const mine2 = new Movie("jailer","psstudio","R13");
const mine3 = new Movie("Jawan","rsstudio");
const mine4 = new Movie("Casino Royale","Eon Production","PG13");

console.log(mine);
console.log(mine2);
console.log(mine3);
console.log(mine4);
console.log(Movie.getPG());