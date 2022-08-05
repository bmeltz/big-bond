import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

    private _itemsInCart:{} = {};
    constructor() { }

    public putInCart(item: Product){
        if(!(item.productId in this._itemsInCart)){
            console.log('was empty now it not')
            this._itemsInCart[item.productId] = {
                name: item.name,
                price: item.price,
                quantity: item.quantity,
                priceId: item.priceId
            };
        }
        else {
            this._itemsInCart[item.productId].quantity += item.quantity;
        }

    }

    public removeFromCart(item: Product) {
        delete this._itemsInCart[item.productId];
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
}

interface CartItem {
    name: string;
    price: number;
    quantity: number;
    sizes?: string[];
}