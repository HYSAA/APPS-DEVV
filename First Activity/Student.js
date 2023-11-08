
const studentForm = document.getElementById("studentForm");
const result = document.getElementById("result");
const addButton = document.getElementById("addButton");
const deleteButton = document.getElementById("deleteButton");

const add= () =>{

    const studentNumber = document.getElementById("studentNumber").value;
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const program = document.getElementById("program").value;
    const year = document.getElementById("year").value;



    const dataString = `Student Number: ${studentNumber}, First Name: ${firstName}, Last Name: ${lastName}, Program: ${program}, Year: ${year}`;
    result.textContent = dataString;

}
const del= () =>{
    result.textContent="";
}  

  
addButton.addEventListener("click", function () {

add();
});


deleteButton.addEventListener("click", function () {

    del();
});

