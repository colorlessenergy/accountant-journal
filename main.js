var startingA = document.getElementById("starting");
var endingA = document.getElementById("ending");
var firstDate = document.getElementById("startingMonth");
var lastDate = document.getElementById("endingMonth");
var type = document.getElementById("type");
var data = document.getElementById("data");
var monthOrder = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEPT", "OCT", "NOV", "DEC"];

var entries = [1000,"JAN-16",100000,0,
3000,"JAN-16",0,100000,
7140,"JAN-16",36000,0,
1000,"JAN-16",0,36000,
1100,"FEB-16",80000,0,
1000,"FEB-16",0,60000,
2000,"FEB-16",0,20000,
1110,"FEB-16",17600,0,
2010,"FEB-16",0,17600,
1000,"MAR-16",28500,0,
4000,"MAR-16",0,28500,
2010,"MAR-16",17600,0,
1000,"MAR-16",0,17600,
5000,"APR-16",19100,0,
1000,"APR-16",0,19100,
1000,"APR-16",32900,0,
1020,"APR-16",21200,0,
4000,"APR-16",0,54100,
1000,"MAY-16",15300,0,
1020,"MAY-16",0,15300,
1000,"MAY-16",4000,0,
4090,"MAY-16",0,4000,
1110,"JUN-16",5200,0,
2010,"JUN-16",0,5200,
5100,"JUN-16",19100,0,
1000,"JUN-16",0,19100,
1000,"JUN-16",0,5000,
7160,"JUL-16",2470,0,
2010,"JUL-16",0,2470,
5500,"JUL-16",3470,0,
1000,"JUL-16",0,3470];

var accounts = [
1000,"Cash",
1020,"Account Receivables",
1100,"Lab Equipement",
1110,"Office Supplies",
2000,"Notes Payables",
2010,"Account Payables",
2110,"Utilities Payables",
3000,"Common Stock",
4000,"Commercial Revenue",
4090,"Unearned Revenue",
5000,"Direct Labor",
5100,"Consultants",
5500,"Misc Costs",
7140,"Rent",
7160,"Telephone",
9090,"Dividends"];

var accountEntries = [];

for (var i = 0; i < entries.length; i++) {
  if(typeof entries[i] === "string") {
    accountEntries.push({
      "account": entries[i-1],
      "period": entries[i],
      "debit": entries[i+1],
      "credit": entries[i+2],
      "job": null
    });
  }
};

for (var i = 0; i < accountEntries.length; i++) {
  for (var j = 0; j < accounts.length; j++) {
    if (accountEntries[i].account === accounts[j]) {
      if (accounts[j+1] !== undefined) {
        accountEntries[i].job = {
          "accountNum": accounts[j],
          "job": accounts[j+1]
        }
      }
    }
  }
};

data.addEventListener("click", function () {
    for (var i = 0; i < monthOrder.length; i++) {
      if (startingMonth.value.toUpperCase().startsWith(monthOrder[i])) {
        var currentIndex = i;
        for(var currentIndex; currentIndex < monthOrder.length; currentIndex++) {
          for (var j = 0; j < accountEntries.length; j++) {
            if (accountEntries[j].period.startsWith(monthOrder[currentIndex]) && accountEntries[j].account > parseInt(startingA.value) && accountEntries[j].account < parseInt(endingA.value)) {
              console.log(accountEntries[j]);
            }
          }
          if (endingMonth.value.toUpperCase().startsWith(monthOrder[currentIndex])) {
            return;
          }
        }
      }
    }
});
