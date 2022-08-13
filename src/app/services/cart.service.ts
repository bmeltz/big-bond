import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

    private _itemsInCart:{} = {};
    constructor() { }

    public putInCart(item: Product){
        if(!(item.productId in this._itemsInCart)){
            this._itemsInCart[item.productId] = {
                name: item.name,
                price: item.price,
                quantity: item.quantity,
                priceId: item.priceId,
                image: item.image,
                allowed_quantities: item.allowed_quantities
            };
        }
        // if identical product is already in the cart, just increase the quantity.
        else {
            this._itemsInCart[item.productId].quantity += item.quantity;
        }
        sessionStorage.setItem('cart', JSON.stringify(this._itemsInCart));
    }

    public getCartFromSessionStorage(): JSON {
        return JSON.parse(sessionStorage.getItem('cart'));
    }

    public removeOneFromCart(item: Product) {
        if(this._itemsInCart.hasOwnProperty(item.productId) && 
        this._itemsInCart[item.productId].quantity > 0) {
            this._itemsInCart[item.productId].quantity = this._itemsInCart[item.productId].quantity - 1;
            sessionStorage.setItem('cart', JSON.stringify(this._itemsInCart));
            return this._itemsInCart[item.productId].quantity;
        }
        return 0;
    }

    public clearCart() {
        this._itemsInCart = {};
        sessionStorage.setItem('cart', JSON.stringify(this._itemsInCart));
        return this._itemsInCart;
    }

    public removeProductFromCart(item: Product) {
        if(this._itemsInCart.hasOwnProperty(item.productId)){
            this._itemsInCart[item.productId].quantity = 0;
            sessionStorage.setItem('cart', JSON.stringify(this._itemsInCart));
        }
    }

    private getProductIdsInCart() {
        let prod_ids = [];
        for(let key in this.getCartFromSessionStorage()) {
            prod_ids.push(key);
        }
        return prod_ids;
    }

    get productIdsInCart() {
        return this.getProductIdsInCart();
    }

    public calculateTotal() {
        let total = 0;
        for(let prodId in this._itemsInCart) {
            total += this._itemsInCart[prodId].price;
        }
        return total;
    }

    get itemsInCart() {
        return this._itemsInCart;
    }

    public logCartContents() {
        console.log(this._itemsInCart);
    }

}

export interface Product {
    name: string;
    price: number;
    quantity: number;
    priceId: string;
    productId: string;
    image: string;
    allowed_quantities: number[];
}