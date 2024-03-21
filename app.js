// var students = [
//      {name:'ali',age:20},
//      {name:'aya',age:19},
//     {name:'ahmad',age:17},
//     {name:'sara',age:28}
// ];
// function youngstudent(studentarry) {
//     var  containeryoung = studentarry[0];
// for (let i = 0; i < studentarry.length; i++) {
//    if (studentarry[i].age <  containeryoung.age) {
//     containeryoung = studentarry[i];
    
//    } 
  
// }
// console.log(containeryoung);    
// }

// youngstudent(students);


var books = [ {name:"book1",  available:true},
{name:"book2",  available:false},
{name:"book3",  available:true} ];

function printbookprice(booksarray,bookname,price) {
   let foundbook = null;
   for (let i = 0; i < booksarray.length; i++) {
    if (booksarray[i].name === bookname) {
      foundbook = booksarray[i]  ;
      break;
    } 
   }
   if (foundbook && foundbook.available) {
    console.log(foundbook);
   } else {
    console.log(foundbook + " is not defind ");
   }

}

printbookprice( books, "book1", 5);
printbookprice( books, "book4", 5);