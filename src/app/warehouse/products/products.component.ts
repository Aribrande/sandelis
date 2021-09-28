import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  pridetiVisible=false;
  @Input() products;
  @Output() orderEmitter=new EventEmitter<{name:string}>();

  constructor() { }

  ngOnInit(): void {
  }

  order(event, name:string){
    console.log(event.target.id);
    this.orderEmitter.emit({name:name});
  }

  addProduct( inputPavadinimas:HTMLInputElement, 
              inputKaina:HTMLInputElement, 
              inputKiekis:HTMLInputElement, 
              inputRezervuota:HTMLInputElement ){
                console.log(inputPavadinimas);
    console.log("Pridedame: "+inputPavadinimas.value+" "+inputKaina.value+" "+inputKiekis.value+" "+inputRezervuota.value);
    
    this.products.push({
        name:     inputPavadinimas.value,
        price:    parseFloat(inputKaina.value),
        count:    parseInt( inputKiekis.value),
        reserved: parseInt(inputRezervuota.value) 
    });

    console.log(this.products);

    inputPavadinimas.value="";
  }

}
