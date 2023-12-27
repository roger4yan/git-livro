const inPrice = document.getElementById("inPrice");
const inTime = document.getElementById("inTime");
const btnCalc = document.getElementById("btnCalc");
const outPay = document.getElementById("outPay");

function convertPay () {
    const price = Number(inPrice.value);
    const time = Number(inTime.value);

    const timeUser = Math.ceil(time / 15);
    const total = timeUser * price;

    outPay.textContent = "Valor a Pagar R$: " + total.toFixed(2);

}

btnCalc.addEventListener("click", convertPay);