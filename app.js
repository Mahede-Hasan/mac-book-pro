// Memory button area

document.getElementById('btn-8gb').addEventListener('click', function(){
    let totalP = document.getElementsByClassName('total');
    for(const totalPrice of totalP){
        const freeMemory = document.getElementById('ex-memory').innerText = 0;
        const bPrice = document.getElementById('best-price').innerText = 1299;
        const firstSSD = document.getElementById('exStorage').innerText;
        const afterExMemory = freeMemory + bPrice + parseFloat(firstSSD);
        totalPrice.innerText = afterExMemory;
    }

})

document.getElementById('btn-16gb').addEventListener('click', function(){
    let totalP = document.getElementsByClassName('total');
    for(const totalPrice of totalP){
        const exMemory = document.getElementById('ex-memory').innerText = 180;
        const bPrice = document.getElementById('best-price').innerText;
        let totalBestPrice = exMemory + parseFloat(bPrice);
        totalPrice.innerText = totalBestPrice;
    }
})

// storage button

document.getElementById('btn-256gb').addEventListener('click', function(){
    let totalP = document.getElementsByClassName('total');
    for(const totalPrice of totalP){
        const storagePrice = document.getElementById('exStorage').innerText = 100;
        const exMemory = document.getElementById('ex-memory').innerText;
        const bPrice = document.getElementById('best-price').innerText;
        const afterStoragePrice = storagePrice + parseFloat(exMemory) + parseFloat(bPrice);
        totalPrice.innerText = afterStoragePrice;
    }

})

document.getElementById('btn-512gb').addEventListener('click', function(){
    let totalP = document.getElementsByClassName('total');
    for(const totalPrice of totalP){
        const storagePrice = document.getElementById('exStorage').innerText = 150;
    const exMemory = document.getElementById('ex-memory').innerText;
    const bPrice = document.getElementById('best-price').innerText;
    const afterStoragePrice = storagePrice + parseFloat(exMemory) + parseFloat(bPrice);
    totalPrice.innerText = afterStoragePrice;
    }

})

document.getElementById('btn-1tb').addEventListener('click', function(){
    let totalP = document.getElementsByClassName('total');
    for(const totalPrice of totalP){
        const storagePrice = document.getElementById('exStorage').innerText = 200;
    const exMemory = document.getElementById('ex-memory').innerText;
    const bPrice = document.getElementById('best-price').innerText;
    const afterStoragePrice = storagePrice + parseFloat(exMemory) + parseFloat(bPrice);
    totalPrice.innerText = afterStoragePrice;
    }

})

// delivery cost 

document.getElementById('free-delivery').addEventListener('click', function(){
    let totalP = document.getElementsByClassName('total');
    for(const totalPrice of totalP){
    const deliveryEx = document.getElementById('delivery-charge').innerText = 0;
    const storagePrice = document.getElementById('exStorage').innerText;
    const exMemory = document.getElementById('ex-memory').innerText;
    const bPrice = document.getElementById('best-price').innerText;
    const afterDeliveryCharge = deliveryEx + parseFloat(storagePrice) + parseFloat(exMemory) + parseFloat(bPrice);
    totalPrice.innerText = afterDeliveryCharge;
    }

})

document.getElementById('expanse-delivery').addEventListener('click', function(){
    
    let totalP = document.getElementsByClassName('total');
    for(const totalPrice of totalP){
    const deliveryEx = document.getElementById('delivery-charge').innerText = 20;
    const storagePrice = document.getElementById('exStorage').innerText;
    const exMemory = document.getElementById('ex-memory').innerText;
    const bPrice = document.getElementById('best-price').innerText;
    const afterDeliveryCharge = deliveryEx + parseFloat(storagePrice) + parseFloat(exMemory) + parseFloat(bPrice);
    totalPrice.innerText = afterDeliveryCharge;
    }
    

})

// promo code

document.getElementById('promo-code-btn').addEventListener('click', function(){
    const promoField = document.getElementById('promo-input').value;
    let totalP = document.getElementsByClassName('total');
    const totalPrice = parseFloat(totalP);
        if(promoField == 'kuddus' == true){
            
            totalP.innerText / 20;
        }
  

})

