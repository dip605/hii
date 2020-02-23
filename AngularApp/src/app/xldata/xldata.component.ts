import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';


import { FileserviceService } from '../shared/fileservice.service';

@Component({
  selector: 'app-xldata',
  templateUrl: './xldata.component.html',
  styleUrls: ['./xldata.component.css'],
  providers: [FileserviceService]
})
export class XldataComponent implements OnInit {
  
  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['year', 'sr', 'description', 'jan', 'feb', 'mar', 'apr', 
                                'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
  searchColumns: string[] = ['year'];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;

  attachmentList:any = [];

  constructor(private fileserviceService: FileserviceService) { }

  ngOnInit(): void {

    this.fileserviceService.getXldata().subscribe((res:any) => {
      // this.attachmentList.push(res);
      // console.log(this.attachmentList[0][2])
      // console.log(this.attachmentList)
      this.listData = new MatTableDataSource(res);
      console.log(this.listData)

      this.listData.sort = this.sort;
      this.listData.paginator = this.paginator;
      this.listData.filterPredicate = (data, filter) => {
        return this.searchColumns.some(ele => {
          return ele != 'actions' && data[ele].toLowerCase().indexOf(filter) != -1;
        });
      };      
    });
  }

  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }

  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }

}
