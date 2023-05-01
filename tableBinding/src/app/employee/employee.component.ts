import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent {
  tableHead=[
    {
      'id': 'ID',
      'name':'Name',
      'department':'DEPARTMENT',
      'salary': 'SALARY',
      'Date': ' DATE'
    }
  ]
  tableData=[
    {
      'id':'1001',
      'name':'Tanushi Solanky',
      'department':'Frontend',
      'salary':'30,000',
      'Date': new Date()

    },
    {
      'id':'1002',
      'name':'Archana Patel',
      'department':'QA',
      'salary':'30,000',
      'Date': new Date()
    },
    {
      'id':'1003',
      'name':'Priyanshi Tripathi',
      'department':'BA',
      'salary':'20,000',
      'Date': new Date()
    },
    {
      'id':'1004',
      'name':'Jaitry Patel',
      'department':'Data',
      'salary':'25,000',
      'Date': new Date()
    },
    {
      'id':'1005',
      'name':'Tejas Ahire',
      'department':'DevOps',
      'salary':'30,000',
      'Date': new Date()
    },
    {
      'id':'1006',
      'name':'Jay Parmar',
      'department':'DevOps',
      'salary':'30,000',
      'Date': new Date()
    },
    {
      'id':'1007',
      'name':'Abhishek Luhaniwal',
      'department':'BA',
      'salary':'25,000',
      'Date': new Date()
    },
    {
      'id':'1008',
      'name':'Sushmita Baraui',
      'department':'.NET',
      'salary':'32,000',
      'Date': new Date()
    },
    {
      'id':'1009',
      'name':'Anand Sagar ',
      'department':'FrontEnd',
      'salary':'32,000',
      'Date': new Date()
    },
    {
      'id':'1010',
      'name':'Shahil Khan',
      'department':'Data',
      'salary':'20,000',
      'Date': new Date()
    }
  ]
  
}
