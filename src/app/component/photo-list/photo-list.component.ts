import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { observable, Observable } from 'rxjs';
import { PhotoService } from 'src/app/service/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {
  photos$!:Observable<any>;
  searchTerm:string="";

  constructor(private photoService:PhotoService) { }

  ngOnInit(): void {
  }
  search(form: NgForm){
    const searchText= form.value.searchTerm;
    if(searchText!=""){
      this.photos$=this.photoService.getPhotoBykeyWord(searchText);
    }
    if(searchText==""){
      this.photos$=new Observable();

    }
    
  }

}
