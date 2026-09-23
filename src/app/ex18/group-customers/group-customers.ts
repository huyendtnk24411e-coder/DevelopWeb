import { Component } from '@angular/core';
import { CustomerService } from '../customer-service';

@Component({
  selector: 'app-group-customers',
  standalone: false,
  templateUrl: './group-customers.html',
  styleUrl: './group-customers.css'
})
export class GroupCustomers {

  customerGroups: any;

  constructor(private customerService: CustomerService) {

    this.customerService.getCustomers().subscribe(
      data => {
        this.customerGroups = data;
      }
    );

  }

}