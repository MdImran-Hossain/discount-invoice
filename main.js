const actualPrice=+prompt("Enter your Product Price:");
const vatAdder=(price=0, vat=7)=>{
    const vatPlusPrice=price+(price*vat/100);
    const vatDetais=[vatPlusPrice, vat]
    return vatDetais;
}
const discounAdder=(vatPlusPrice=0, discout=25)=>{
    const discountPrice=vatPlusPrice-(vatPlusPrice*discout/100);
    const discountDatails=[discountPrice, discout];
    return discountDatails;
}
const display=(pactualPrice, vatWithPrice, vat, discountprice,discount)=>{
    document.getElementById('price').innerHTML=(`
        -----------------------------------invoice------------------------------------- <br>
        Actual Price             :${pactualPrice} Tk <br>
        Vat                      :${vat}% <br>
        --------------------------------------------------------------------------------- <br>
        Vat With Price           :${vatWithPrice} Tk<br>
        --------------------------------------------------------------------------------- <br>
        Discount                 :${discount}%<br>
        --------------------------------------------------------------------------------- <br>
        Total Price              :${Math.round(discountprice)} Tk
        `);
    
}
const receviedVatDatais=vatAdder(actualPrice, 7);
const receviedDiscountDatais=discounAdder(receviedVatDatais[0],25);

display(actualPrice, receviedVatDatais[0], receviedVatDatais[1],receviedDiscountDatais[0],receviedDiscountDatais[1]);
