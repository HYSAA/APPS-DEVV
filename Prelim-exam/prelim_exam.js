(function() {
    let del=document.getElementById("clear")
    let entryArea = document.getElementById("entry-area");    
    let outputArea = document.getElementById("output-area");
    let categoryTitles = [
        ['Exemption','0.00','0.00','1.65','8.25','28.05','74.26','165.02','412.54'],
        ['Status     (\'000P)','+0% over','+5% over','+10% over','+15% over','+20% over','+25% over','+30% over','+32% over']
    ];

    let taxOver = [0,0.05,0.10,0.15,0.20,0.25,0.30,0.32];
    let taxValue = [0.00,0.00,1.65,8.25,28.05,74.26,165.02,412.54];
    let zCategory = ['1.Z',0.0,1,0,33,99,231,462,825,1650];
    let smeCategory = ['2.S/ME',50.0,1,165,198,264,396,627,990,1815];

    let newLabelElement = document.createElement("label");
    let newBreakElement = document.createElement("br");

    const Del= () =>{
        outputArea.textContent=""
   
       }
       ///tawgon ang Del function sa event listener
       del.addEventListener("click", function (){
           Del()
       })




    //diri na function mag himo og html elements
    const info = () =>{ 
    let fname= document.createElement("h1")
    let fname1=document.createElement("input")
    fname.innerHTML="First Name"
    entryArea.append(fname)
    entryArea.append(fname1)
    
    let lname= document.createElement("h1")
    let lname1=document.createElement("input")
    lname.innerHTML="Last Name"
    entryArea.append(lname)
    entryArea.append(lname1)

    let tax= document.createElement("h1")
    let tax1=document.createElement("select")
    let tax2=document.createElement("option")
 
    tax2.innerHTML= "married"
    tax.innerHTML="Tax Category" 
    entryArea.append(tax)
    entryArea.append(tax1)
  
    let brElement = document.createElement("br");
    entryArea.append(brElement)
    let hours = document.createElement("h1")
    let hours1=document.createElement("input")
    hours.innerHTML="Hours worked"
    entryArea.append(hours)
    entryArea.append(hours1)

    let rate=document.createElement("h1")
    let rate1=document.createElement("input")
    rate.innerHTML="Rate per Hour"
    entryArea.append(rate)
    entryArea.append(rate1)




}


// trying to add a logic to the dom elements
const calculateTax= () =>{
   hour=document.getElementById("hours1")
   rate= document.getElementById("rate1")
   
  info()
}
//gi tawag ang info function
info()






    
    function drawReference(){

            let topHeadings = ['Daily',1,2,3,4,5,6,7,8];

            let reference = document.getElementById("reference");
            reference.innerHTML = "<span style='font-size: 25pt; font-weight: bold; display: inline-block; height: 50px;'>Reference Table:</span>";
            let newFragment = document.createDocumentFragment();            
   
            let tableElement = document.createElement("table");
            let tableRowElement = document.createElement("tr");
            let tableHeadElement = document.createElement("th");
            let tableDataElement = document.createElement("td");

            let newTable = newFragment.appendChild(tableElement.cloneNode(true));
            newTable.style.margin = "0 auto";
            newTable.setAttribute("border","1");
            
            let colCounter;
            let rowCounter;

            newTableRow = newTable.appendChild(tableRowElement.cloneNode(true));

            for(colCounter = 0;colCounter < topHeadings.length;colCounter++){
            let newHeadColumn = newTableRow.appendChild(tableHeadElement.cloneNode(true));
            
                if(colCounter == 0){
                    newHeadColumn.setAttribute("colspan","2");
                    newHeadColumn.style.width = "800px";
                }   
                
                newHeadColumn.innerText = topHeadings[colCounter];
                newHeadColumn.style.width = "100px";       
            }

            for(rowCounter = 0;rowCounter < categoryTitles.length; rowCounter++){
             newTableRow = newTable.appendChild(tableRowElement.cloneNode(true));
                for(colCounter = 0;colCounter < categoryTitles[rowCounter].length; colCounter++){ 
                    let newDataColumn = newTableRow.appendChild(tableDataElement.cloneNode(true));
                    //newDataColumn.style.width = "100px";
                    if(colCounter == 0)
                        newDataColumn.setAttribute("colspan","2");
                    else 
                        newDataColumn.style.textAlign = "right";

                        newDataColumn.innerText = categoryTitles[rowCounter][colCounter]; 
                }
            }

            newTableRow = newTable.appendChild(tableRowElement.cloneNode(true));
            let newDataColumn = newTableRow.appendChild(tableDataElement.cloneNode(true)); 
            newDataColumn.setAttribute("colspan","10");
            newDataColumn.innerText = "A. Table for employees without qualified dependent";
            newDataColumn.style.textAlign = "left";

            newTableRow = newTable.appendChild(tableRowElement.cloneNode(true));
            colCounter = 0;
            for(let indexValue of zCategory){
                let newDataColumn = newTableRow.appendChild(tableDataElement.cloneNode(true));
                newDataColumn.innerText = indexValue.toLocaleString('en',{minimumFractionDigits:2,maximumFractionDigits:2});
                if(colCounter != 0)
                    newDataColumn.style.textAlign = "right";

                colCounter++;
            }


            newTableRow = newTable.appendChild(tableRowElement.cloneNode(true));
            colCounter = 0;
            for(let indexValue of smeCategory){
                let newDataColumn = newTableRow.appendChild(tableDataElement.cloneNode(true));
                newDataColumn.innerText = indexValue.toLocaleString('en',{minimumFractionDigits:2,maximumFractionDigits:2});
                if(colCounter != 0)
                    newDataColumn.style.textAlign = "right";
                
                colCounter++;
            }


            newFragment.appendChild(newTable);

            reference.appendChild(newFragment);
            reference.style.fontFamily = "arial";
            reference.style.fontSize = "13pt";
    }




    drawReference(); 
     
})();