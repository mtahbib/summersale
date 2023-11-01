//GO HOME
function goHome()
{
    window.location.href = "index.html";
}

// main appender and calculator 


let total=0;
const ol = document.createElement('ol');
function handleMe(target) {
  const selectedCont = document.getElementById("addContainer");
  const itemNames = target.childNodes[5].innerText;
  ol.style.listStyleType = 'decimal';
  const li = document.createElement('li');
  li.innerText = itemNames;

  ol.appendChild(li);
  selectedCont.appendChild(ol);
// const li = document.createElement('li')
// li.innerText=itemNames;
// selectedCont.appendChild(li);
const costPrice= target.childNodes[7].innerText.split(" ")[0];
const cp= parseFloat(costPrice);
total=parseFloat(total)+ cp;
document.getElementById('totalTk').innerText=total + ' TK';
const discount=document.getElementById('discount')
const discountAmountString= discount.innerText.split(" ")[0];
// console.log(discountAmount)
let discountAmount=parseFloat(discountAmountString);
const finalPay= document.getElementById('finalPay')
const finalPayString= finalPay.innerText.split(" ")[0];


const finalPayAmount=parseFloat(finalPayString)
console.log(finalPayAmount)
const finalPayAmount1= total - discountAmount;
document.getElementById('finalPay').innerText= finalPayAmount1 + ' TK';


if (total >  0) {
    const makePurchaseButton = document.getElementById('makePurchaseButton');
    makePurchaseButton.removeAttribute('disabled')


}

if(total>=200){
    const applyCouponButton= document.getElementById('applyCouponButton');
    applyCouponButton.removeAttribute('disabled');
}


}
function applyCoupon() {
    const couponCodeInput = document.getElementById('couponCode');
    const couponCode = couponCodeInput.value;
    if (couponChecker(couponCode)) {
      let discount = 0;
      if (total >= 200) {
        discount = (total * 0.20).toFixed(2);  
      }
      finalPayAmount1 = total - parseFloat(discount);
      document.getElementById('finalPay').innerText = finalPayAmount1 +' TK';
      document.getElementById('discount').innerText = discount +' TK';
     
      discountApplied = true;
      alert('Coupon applied!' );
    
    } 
    else {
      alert('Invalid coupon code! Thik kore den!.');
    }
  }
  
  function couponChecker(couponCode) {
 
    const validCodes = ['TAHBIB', 'SUHA', 'SELL200' ,'a' ]; 
    return validCodes.includes(couponCode);
  }


