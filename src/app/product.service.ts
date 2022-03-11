import {Product} from './product'
import { Observable, Subject } from 'rxjs';
import { Injectable } from '@angular/core';

 @Injectable({
     providedIn: 'root'
 })
export class ProductService{
    public  getProducts() {
 
        let products:Product[];
 
        products=[
            new Product(101,'Tesla',3500000),
            new Product(102,'Audi r8',7500000),
            new Product(103,'lambo',10000000)
        ]
 
        return products;               
    }
    private subject = new Subject<any>();
    sendclickevent(){
        this.subject.next('');
    }
    getclickevent():Observable<any>{
        return this.subject.asObservable();
    }
}