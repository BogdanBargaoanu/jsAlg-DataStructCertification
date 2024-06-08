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
const priceDisplay = document.getElementById('price');
// Display the change in the drawer
displayChangeInDrawer();
priceDisplay.innerHTML = `<h2>Price: ${price}</h2>`;

function displayChangeInDrawer() {
  let change = '<ul>';
  cid.forEach((item) => {
    change += `<li>${item[0]}: ${item[1]}</li>`;
  });
  change += '</ul>';
  changeInDrawer.innerHTML = change;
}

buy.addEventListener('click', () => {
  let result = { status: 'OPEN', change: [] };
  let cashValue = cash.value;
  let change = cashValue - price;
  let totalInDrawer = 0;
  let values = [100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01];
  let reversedCid = [...cid].reverse();
  cid.forEach((item) => {
    totalInDrawer += item[1];
  });

  if (cashValue == price) {
    changeDue.innerHTML = 'No change due - customer paid with exact cash';
    cash.value = '';
    return;
  }

  if (cashValue < price) {
    result.status = 'INSUFFICIENT_FUNDS';
    alert('Customer does not have enough money to purchase the item')
    cash.value = '';
    return;
  }
  else if (totalInDrawer === change) {
    result.status = 'CLOSED';
  }
  else {
    result.status = 'OPEN';
  }

  if (totalInDrawer < change) {
    result.status = 'INSUFFICIENT_FUNDS';
    changeDue.innerHTML = 'Status: INSUFFICIENT_FUNDS';
    return;
  }

  for (let i = 0; i <= reversedCid.length; i++) {
    if (change >= values[i] && change > 0) {
      let count = 0;
      let totalVal = reversedCid[i][1];
      while (change >= values[i] && totalVal > 0) {
        change = change - values[i];
        totalVal -= values[i];
        count++;
        change = Math.round(change * 100) / 100;
      }
      if (count > 0) {
        result.change.push([reversedCid[i][0], count * values[i]]);
      }
    }
  }
  console.log(result.change);
  if (change > 0) {
    result.status = 'INSUFFICIENT_FUNDS';
  }

  if (result.status === 'INSUFFICIENT_FUNDS') {
    changeDue.innerHTML = 'Status: INSUFFICIENT_FUNDS';
    return;
  }
  else {
    changeDue.innerHTML = `Status: ${result.status}<br><ul>`;
    result.change.forEach((item) => {
      changeDue.innerHTML += `<li>${item[0]}: $${item[1]}</li>`;
    }
    );
    changeDue.innerHTML += '</ul>';
    if (result.change.length > 0) {
      result.change.forEach(item => {
        const target = cid.find(cid => cid[0] === item[0]);
        target[1] -= item[1];
        target[1] = target[1].toFixed(2);
      });
      displayChangeInDrawer();
      cash.value = '';
    }
  }

});