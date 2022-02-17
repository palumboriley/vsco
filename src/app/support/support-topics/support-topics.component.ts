import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'vsco-support-topics',
  templateUrl: './support-topics.component.html',
  styleUrls: ['./support-topics.component.css']
})
export class SupportTopicsComponent implements OnInit {


  @Input() logo: string;
    @Input() title: string;
    @Input() firstLine: string;
    @Input() link: string;
    @Input() link2: string;
    @Input() link3:string;
    @Input() color: string;

    constructor(){
        this.logo="/assets/bootstrap-icons.svg#question-circle";
        this.title="Missing Title";
        this.firstLine="Missing ";
        this.link="Missing";
        this.link2="Missing";
        this.link3="Missing";
        this.color="black";
    }
  

  ngOnInit(): void {
  }

}
