import { Component, OnInit } from '@angular/core';
import { warehouseData } from './warehouse.data';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.css']
})
export class WarehouseComponent implements OnInit {
  warehouseData=warehouseData;
  orders=[];

  onOrder(order: {name:string} ){
    this.orders.push(order.name);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
