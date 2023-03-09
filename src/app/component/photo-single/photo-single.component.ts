import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-single',
  templateUrl: './photo-single.component.html',
  styleUrls: ['./photo-single.component.css']
})
export class PhotoSingleComponent implements OnInit {
  @Input() photo:any;

  constructor() { }

  ngOnInit(): void {
  }

}
