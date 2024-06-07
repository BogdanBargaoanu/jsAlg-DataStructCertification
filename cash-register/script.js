let price = 1.87;
let cid = [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
];

const changeInDrawer = document.getElementById('change-in-drawer');
const changeDue = document.getElementById('change-due');
const cash = document.getElementById('cash');
const buy = document.getElementById('purchase-btn');

// Display the change in the drawer
displayChangeInDrawer();

function displayChangeInDrawer() {
  let change = '<ul>';
  cid.forEach((item) => {
    change += `<li>${item[0]}: ${item[1]}</li>`;
  });
  change += '</ul>';
  changeInDrawer.innerHTML = change;
}