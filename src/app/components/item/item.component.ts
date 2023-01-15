import {Component, Input, OnInit} from '@angular/core';
import {Movie} from "../../models/movie";
import {IMAGES_SIZE} from "../../constants/images-size";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
@Input() itemData: Movie| null = null

imagesSizes  = IMAGES_SIZE;
  constructor() { }

  ngOnInit(): void {
  }

}
