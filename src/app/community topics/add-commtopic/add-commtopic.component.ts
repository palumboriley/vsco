import { Component, OnInit } from '@angular/core';
import { CommTopicModel } from '../commtopic.model';
import { CommtopicService } from '../commtopic.service';

@Component({
  selector: 'vsco-add-commtopic',
  templateUrl: './add-commtopic.component.html',
  styleUrls: ['./add-commtopic.component.css']
})
export class AddCommtopicComponent implements OnInit {

  constructor(public ps: CommtopicService) { }

  ngOnInit(): void {
  }

  addCommtopic(commtopic: CommTopicModel){
    console.log("You clicked add community forum topic");
    console.log(commtopic);
    this.ps.addCommtopic(commtopic);
    
  }


}
