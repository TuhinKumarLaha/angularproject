import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  orderid : string;
  orderdate : string;
  deliverydate : string;
  status : string;
  totalcost : number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {orderid: 'o001', orderdate: '12/12/2020',  deliverydate: '16/12/2020', status: 'Delivered', totalcost: 460.78}
];

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  
  displayedColumns: string[] = ['orderid','orderdate','deliverydate','deliverystatus','totalcost'];
  dataSource = ELEMENT_DATA;
}
