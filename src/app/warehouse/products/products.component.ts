import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  @Input() products;
  @Output() orderEmitter=new EventEmitter<{name:string}>();

  constructor() { }

  ngOnInit(): void {
  }

  order(name:string){
    console.log("Uzsakomas: "+name);
    this.orderEmitter.emit({name:name});
  }

}
