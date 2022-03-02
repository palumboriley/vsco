import { Component, OnInit } from "@angular/core";
import { CommTopicModel } from "./commtopic.model";
import { CommtopicService } from "./commtopic.service";
import { mock_commtopic_list } from "./mock_commtopic_list";

@Component({
  selector: "vsco-community-layout",
  templateUrl: "community-layout.component.html",
  styleUrls: ["community-layout.component.css"]
})
export class CommunityLayoutComponent implements OnInit {
  commtopics: CommTopicModel[] = [];

  constructor(private commtopicService: CommtopicService) {

  }

  ngOnInit(): void {
    this.commtopicService.getCommTopics().subscribe(data => {
      console.log("Fetching commtopic data");
      for (var commtopics of data) {
        console.log(commtopics);
        this.commtopics.push(commtopics);
      }
    })
  }
}