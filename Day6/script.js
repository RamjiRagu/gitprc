var student = [
    {
        name: "Alex",
        mark: 50
    },
    {
        name: "Bala",
        mark: 60
    },
    {
        name: "John",
        mark: 30
    }
]

var result = student.map((elem)=> elem.mark+10)
console.log(result);
var res = student.filter((ele)=> ele.mark >=50)
console.log(res);
console.log(student);
var re = student.reduce((acc,ind)=> acc+ind.mark,0)
console.log(re);