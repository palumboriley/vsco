import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'vsco-frequently-searched',
  templateUrl: './frequently-searched.component.html',
  styleUrls: ['./frequently-searched.component.css']
})
export class FrequentlySearchedComponent implements OnInit {

  @Input() title: string;
   

    constructor(){
        this.title="Missing Title";
       
    }

  ngOnInit(): void {
  }

}
