import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // tslint:disable-next-line:no-inferrable-types
  // show: boolean = false;
  // toggler: any = 'Show';

  constructor() { }

  ngOnInit() {
  }

  // toggleCategories() {
  //   this.show = !this.show;

  //   if (this.show) {
  //     this.toggler = 'Hide';
  //   } else {
  //     this.toggler = 'show';
  //   }
  // }

}
