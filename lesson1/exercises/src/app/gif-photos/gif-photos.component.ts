import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gif-photos',
  templateUrl: './gif-photos.component.html',
  styleUrls: ['./gif-photos.component.css']
})
export class GifPhotosComponent implements OnInit {

  gifImagePath = "https://c.tenor.com/GfSX-u7VGM4AAAAC/coding.gif"

  constructor() { }

  ngOnInit() {
  }

}
