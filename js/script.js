document.getElementById('sixteenGB').addEventListener('click', function(){
    const memoryCost = document.getElementById("memory-cost");
    memoryCost.innerText = 200;
    // memoryCost.innerText = parseFloat(memoryCost.innerText) + 200;
    const bestPrice = document.getElementById("best-price").innerText;
    const memoryPrice = document.getElementById("memory-cost").innerText;
    const storagePrice = document.getElementById("storage-cost").innerText;
    const deliveryPrice = document.getElementById("delivery-cost").innerText;

    const totalPrice = parseFloat(bestPrice) + parseFloat(memoryPrice) + parseFloat(storagePrice) + parseFloat(deliveryPrice);

    const total = document.getElementById("total-price");
    total.innerText = totalPrice;
    updatePrice("memory-cost", 300);
    
})

