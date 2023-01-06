import {Component, Input, OnInit} from '@angular/core';
import {Movie} from "../../models/movie";
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [
    trigger('slideFade', [
      state('void', style({opacity: 0})),
      transition('void => *', [animate('1s')]),
      transition('* => void', [animate('500ms')])
    ])
  ]
})
export class SliderComponent implements OnInit {
  @Input() items: Movie[] = [];
  currentSlide:number = 0;
  constructor() {
  }

  ngOnInit(): void {
    setInterval(()=>{
      this.currentSlide = ++this.currentSlide % this.items.length;
    },5000)
  }

}
