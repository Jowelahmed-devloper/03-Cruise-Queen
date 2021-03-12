
// Economy Increase Button
document.getElementById('economyPlus').addEventListener('click', function(){
    // const economyInput  = document.getElementById('economyInput').value;
    // const economyIncrease = parseInt(economyInput);
    // const economyNewIncrease = economyIncrease + 1;
    // document.getElementById('economyInput').value = economyNewIncrease;

    // const economyPrice = economyNewIncrease*150;
    // document.getElementById('economyPrice').innerText = economyPrice;
    handleTicketPrice('economy',true);
})

// Economy Decrease Button
document.getElementById('economyMinus').addEventListener('click',function(){
    // const economyInput = document.getElementById('economyInput').value;
    // const economyDecrease = parseInt(economyInput);
    // const economyNewDecrease = economyDecrease -1;
    // document.getElementById('economyInput').value = economyNewDecrease;

    // const economyPrice = economyNewDecrease *150;
    // document.getElementById('economyPrice').innerText = economyPrice;
    handleTicketPrice('economy',false);

})
// Function For All Increase and Decrease Button 
function handleTicketPrice(product, isIncrease){
    const ticketInput = document.getElementById(product +'Input').value;
    const ticketHandle = parseInt(ticketInput);
    // const economyNewDecrease = economyDecrease -1;
    let ticketNewHandle =0;
    if(isIncrease == true){
        ticketNewHandle = ticketHandle +1;
    }
    if(isIncrease == false && ticketHandle >0){
        ticketNewHandle = ticketHandle -1;
    }
    document.getElementById(product +'Input').value = ticketNewHandle;
    // const economyPrice = economyNewDecrease *150;
    let ticketPrice =0;
    if(product == 'economy'){
        ticketPrice = ticketNewHandle *150;
    }
    if(product == 'first'){
        ticketPrice = ticketNewHandle *100;
    }
    document.getElementById(product + 'Price').innerText = ticketPrice;
    calculateTotal();
}

// First Class Increase Button

document.getElementById('firstPlus').addEventListener('click',function(){
    // const firstInput = document.getElementById('firstInput').value;
    // const firstIncrease = parseInt(firstInput);
    // const firstNewIncrease = firstIncrease +1;
    // document.getElementById('firstInput').value = firstNewIncrease;

    // const firstPrice = firstNewIncrease *100;
    // document.getElementById('firstPrice').innerText =firstPrice;
    handleTicketPrice('first', true)
})

// First Decrease
document.getElementById('firstMinus').addEventListener('click', function(){
    // const firstInput = document.getElementById('firstInput').value;
    // const firstDecrease = parseInt(firstInput);
    // const firstNewDecrease = firstDecrease -1;
    // document.getElementById('firstInput').value = firstNewDecrease;

    // const firstPrice = firstNewDecrease *100;
    // document.getElementById('firstPrice').innerText = firstPrice;
    handleTicketPrice('first', false)

})

function calculateTotal(){
    const economyInput = document.getElementById('economyInput').value;
    const economyIncrease = parseInt(economyInput);
    // const economyIncrease = getInputValue('economyInput');

    const firstInput = document.getElementById('firstInput').value;
    const firstIncrease = parseInt(firstInput);
    // const firstIncrease = getInputValue('firstInput');

    const subTotal = economyIncrease *150 + firstIncrease *100;
    document.getElementById('subTotal').innerText = subTotal;

    const tax = Math.round(subTotal * 0.1)
    document.getElementById('tax').innerText = tax;
    const grandTotal = subTotal +tax;
    document.getElementById('grandTotal').innerText = grandTotal;
}

// Total
document.getElementById('bookNow').addEventListener('click', function(){
    const mainContent = document.getElementById('maincontent');
    mainContent.style.display = 'none'; 
    const thankYou = document.getElementById('thanks');
    thankYou.style.display = 'block';
})