document.getElementById('eight-gb-ram').addEventListener('click', function(){
    // console.log('clicked');

   const updateMemory = 0;

    const updateText = document.getElementById('update-ram');
    // const updateInt = parseInt(updateText.innerText);
    updateText.innerText = updateMemory;
    const totalText = document.getElementById('raw-price');
    const totalRaw = parseInt(totalText.innerText);
    const grandTotal = document.getElementById('total');
    grandTotal.innerText = totalRaw + updateMemory;
    
    
    const bonusRaw = document.getElementById('bonus-total');
    bonusRaw.innerText = grandTotal.innerText;
});

document.getElementById('sixteen-gb-ram').addEventListener('click', function(){
    // console.log('clicked');

   const updateMemory = 180;

    const updateText = document.getElementById('update-ram');
    // const updateInt = parseInt(updateText.innerText);
    updateText.innerText = updateMemory;


    // const totalText = document.getElementById('raw-price');
    // const totalRaw = parseInt(totalText.innerText);
    const grandTotal = document.getElementById('total');
    const totalRaw = parseInt(grandTotal.innerText)
    grandTotal.innerText = totalRaw + updateMemory;

    const bonusRaw = document.getElementById('bonus-total');
    bonusRaw.innerText = grandTotal.innerText;
});

document.getElementById('two-fifty-six').addEventListener('click', function(){
    // console.log('clicked');

   const updateSsd = 0;

    const updateText = document.getElementById('update-storage');
    // const updateInt = parseInt(updateText.innerText);
    updateText.innerText = updateSsd;


    // const totalText = document.getElementById('raw-price');
    // const totalRaw = parseInt(totalText.innerText);
    // const grandTotal = document.getElementById('total');
    // grandTotal.innerText = totalRaw + updateMemory;
    const grandTotal = document.getElementById('total');
    const totalRaw = parseInt(grandTotal.innerText)
    grandTotal.innerText = totalRaw + updateSsd;

    const bonusRaw = document.getElementById('bonus-total');
    bonusRaw.innerText = grandTotal.innerText;
});

document.getElementById('five-twelve').addEventListener('click', function(){
    // console.log('clicked');

   const updateSsd = 100;

    const updateText = document.getElementById('update-storage');
    // const updateInt = parseInt(updateText.innerText);
    updateText.innerText = updateSsd;


    // const totalText = document.getElementById('raw-price');
    // const totalRaw = parseInt(totalText.innerText);
    // const grandTotal = document.getElementById('total');
    // grandTotal.innerText = totalRaw + updateSsd;
    const grandTotal = document.getElementById('total');
    const totalRaw = parseInt(grandTotal.innerText)
    grandTotal.innerText = totalRaw + updateSsd;

    const bonusRaw = document.getElementById('bonus-total');
    bonusRaw.innerText = grandTotal.innerText;
});

document.getElementById('one-tera').addEventListener('click', function(){
    // console.log('clicked');

   const updateSsd = 180;

    const updateText = document.getElementById('update-storage');
    // const updateInt = parseInt(updateText.innerText);
    updateText.innerText = updateSsd;


    // const totalText = document.getElementById('raw-price');
    // const totalRaw = parseInt(totalText.innerText);
    // const grandTotal = document.getElementById('total');
    // grandTotal.innerText = totalRaw + updateSsd;
    const grandTotal = document.getElementById('total');
    const totalRaw = parseInt(grandTotal.innerText)
    grandTotal.innerText = totalRaw + updateSsd;

    const bonusRaw = document.getElementById('bonus-total');
    bonusRaw.innerText = grandTotal.innerText;
});

document.getElementById('free-delivery').addEventListener('click', function(){
    // console.log('clicked');

   const updateDelivery = 0;

    const updateText = document.getElementById('update-delivery');
    updateText.innerText = updateDelivery;
    
    // const totalText = document.getElementById('raw-price');
    // const totalRaw = parseInt(totalText.innerText);
    // const grandTotal = document.getElementById('total');
    // grandTotal.innerText = totalRaw + updateDelivery;
    const grandTotal = document.getElementById('total');
    const totalRaw = parseInt(grandTotal.innerText)
    grandTotal.innerText = totalRaw + updateDelivery;

    const bonusRaw = document.getElementById('bonus-total');
    bonusRaw.innerText = grandTotal.innerText;
});

document.getElementById('premium-delivery').addEventListener('click', function(){
    // console.log('clicked');

   const updateDelivery = 20;

    const updateText = document.getElementById('update-delivery');
    updateText.innerText = updateDelivery;

    const totalText = document.getElementById('total');
    const totalRaw = parseInt(totalText.innerText);
    const grandTotal = totalRaw + 20;
    totalText.innerText = grandTotal;

    const bonusRaw = document.getElementById('bonus-total');
    bonusRaw.innerText = totalText.innerText;
});

document.getElementById('cuopon').addEventListener('click', function(){
    const cuoponField = document.getElementById('inputCuopon');
   const userName = cuoponField.value;
   if (userName == 'stevekaku'){
    const bonusRaw = document.getElementById('bonus-total');
    const beforeCuopon =parseInt(bonusRaw.innerText); 
    const finalAmount = (beforeCuopon * .8);
    bonusRaw.innerText = finalAmount;
}
})