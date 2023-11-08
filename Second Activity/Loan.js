let submit = document.getElementById("submit");
let lamount = new Number(document.getElementById("loanAmount").value);
let months = new Number(document.getElementById("month").value);
let computeAmount= new Number(document.getElementById("computeAmount"))
let amonths = new Number(document.getElementById("amountmonth"));
let del = document.getElementById("delete")
const loan = () => {



  if (lamount >= 10000) {
    lamount = lamount + (lamount * 0.035);
//   } else if (lamount < 10000) {
   
//     return lamount;
//   }
  }
  if (months >= 18) {
    lamount = lamount + (lamount * 0.03);
  }
  else if (months >= 12 && months <18) {
    lamount = lamount + (lamount * 0.02);
  }
   else if(months)
  console.log(lamount);

 amonths = lamount / months;
  console.log(lamount.toLocaleString('en', { minimumFractionDigits: 2, maximumFractionDigits: 2 }));
  console.log(amonths.toLocaleString('en', { minimumFractionDigits: 2, maximumFractionDigits: 2 }));
  document.getElementById("computeAmount").value = lamount.toLocaleString('en', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  document.getElementById("amountmonth").value = amonths.toLocaleString('en', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
};

submit.addEventListener('click', function () {
  loan();
});


