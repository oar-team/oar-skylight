import { Component, OnInit } from "@angular/core";
import { OarApiService } from "../../shared/services/oar-api/oar-api.service";
import { Job } from "../../shared/services/oar-api/model/job";
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs/Rx";
import { Router } from "@angular/router";

@Component({
  moduleId: module.id,
  selector: "resources-page",
  templateUrl: "./resources.html",
  providers: [OarApiService]
})
export class ResourcesComponent implements OnInit {
  data: any = [];

  constructor(private apiService: OarApiService, private router: Router) {}

  ngOnInit() {
    this.apiService
      .getResources()
      .subscribe(data => this.loadResources(data), error => console.log(error));
  }

  loadResources(json: any) {
    this.data = json.items;
    console.log(this.resourcesRecap());
  }
  
  /**
   * Reduce resources json to an object of state and their occurrence
   * Ex : { Alive: 8, Dead: 4, Suspected: 4}
   */
  resourcesRecap() {
    return this.data
      .map(resource => resource.state)
      .reduce(function(map, state) {
        map[state] = (map[state] || 0) + 1;
        return map;
      }, {});
  }
}
