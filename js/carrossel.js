let carrosel = document.getElementById('carrossel');

let position = -1289;
let nextBtn = document.getElementById("next-btn");
nextBtn.onclick = ()=>{
    if (position <= -2289){
        return;
    }
    position -= 200;
    carrossel.style.left = `${position}px`;
};

let previusBtn = document.getElementById("previous-btn");
previusBtn.onclick = ()=> {
    if (position >= -1289){
        return;
    }
    position += 200;
    carrossel.style.left = `${position}px`;
};


function X(response){
    console.log(response);

    for (let i=0; i< response.data.recommendation.length; i++){
        let item = response.data.recommendation[i];

        carrosel.innerHTML += `
        <li id="${item.businessId}" class="product">
            <a href="${item.detailUrl}">
            <img src="${item.imageName}" />
            <div>${item.name}</div>
            <div >
                    ${item.oldPrice ? "De: "+ item.oldPrice : ''}
            </div>
            <div class="price-color">
                Por:  <strong class="price">${item.price}</strong>
            </div>
            <div class="price-color">${item.productInfo.paymentConditions}</div>
            </a>
        </li>
        `;
    }
}