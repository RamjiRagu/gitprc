// 1. For the given JSON iterate overall for loops (for, forin, forof, foreach)

const person = {
    id: 1,
    fname: 'Ramji',
    lname: 'Jeyaraman',
    mname: 'Ragunath',
    age: '24',
    gender: 'male'
};

// for in 

// for(const key in person){
//     console.log(key,person[key]);
// }

// for each - object.keys

// const key = Object.keys(person);

// key.forEach(k => {
//     console.log(k,person[k]);
// });

// const entry = Object.entries(person);

// entry.forEach(e => {
//     console.log(e[0],e[1]);
// });

const entry = Object.entries(person);

for(const [key, value] of entry){
    console.log(key,value);
}



// Create your own resume in JSON format

{
    "basics": {
        "name": "Ramji Ragunath Jeyaraman",
        "picture": " ",
        "email": "ramjijeyaraman123@gmail.com",
        "phone": "8870685929",
        "location": "Madurai"
    },
    "Education": {
        "B.E.,": "CSE-79% in Velammal Engineering College",
        "HSC": "92% in Aadharsh Vidhyalaya",
        "CISCE": "72% in MKR AJ School"
    },
    "Skills": {
        "python": "Expert",
        "Excel": "Intermediate",
        "Communication": "Good"
    },
    "Personal Details": {
        "DOB":"15-09-1999",
        "Nationality":"Indian",
        "Languages": "English, Tamil"
    },
    "Area of Interest": {
        "DataBase": "MongoDB",
        "Frondend": "Javascript",
        "Backend":"React JS"
    },
    "Certification": {
        "BEC": "A2",
        "Inplant": "Shipping Corporation"
    },
    "Projects": {
        "ERZETTA": "Recipe Finder",
        "SASE": "Vmware,fortinet and versa"
    }

}