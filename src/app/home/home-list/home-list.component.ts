import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator'
import { MatTableDataSource } from '@angular/material/table'
import { MatSort } from '@angular/material/sort'
import { DialogComponent } from './../dialog/dialog.component';
import { ApihomeService } from './../../service/apihome.service';


@Component({
    selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.scss']
})
export class HomeListComponent {

  displayedColumns: string[] = ['ProductName', 'category', 'date', 'freshness', 'price', 'comment', 'action'];
  dataSource!: MatTableDataSource<any>

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialog, private api: ApihomeService){}
  ngOnInit(): void {
    this.getAllProducts();
  }
    openDialog(){
      this.dialog.open(DialogComponent, {
        data: {
          with: '30%'
        }
      }).afterClosed().subscribe(val => {
        if(val === 'save'){
          this.getAllProducts();
        }
      })
  }
  getAllProducts(){
    this.api.getProduct().subscribe({
      next:(res)=>{
        console.log(res);
         this.dataSource = new MatTableDataSource(res);
         this.dataSource.paginator = this.paginator;
         this.dataSource.sort = this.sort;

      },
      error:(err)=>{
        alert("Error while fecting the Records!!");
      }
    })

  }
  editProduct(row: any){
       this.dialog.open(DialogComponent, {
        width: '30%',
        data:row
       }).afterClosed().subscribe(val => {
        if(val==='update'){
          this.getAllProducts();
        }
       })
  }

  deleteProduct(id:number){
    this.api.deleteProduct(id).subscribe({
      next:(res)=>{
        alert('Product Deleted Successfully');
        this.getAllProducts();
      },
      error:()=>{
        alert("Error while deleting the product ")
      }
    })
  }
}
