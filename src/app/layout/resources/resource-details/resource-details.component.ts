import { Resource } from './../../../shared/services/oar-api/model/resource';
import { Location } from '@angular/common';
import { ActivatedRoute } from "@angular/router";
import { OarApiService } from "./../../../shared/services/oar-api/oar-api.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-resource-details",
  templateUrl: "./resource-details.component.html",
  styleUrls: ["./resource-details.component.scss"]
})
export class ResourceDetailsComponent implements OnInit {

  public resource: Resource;

  constructor(private api: OarApiService, private route: ActivatedRoute, private location: Location) {
    this.resource = new Resource({});
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = +params["id"]; // cast into a number;

      // If id is a proper number
      if (!isNaN(id)) {
        this.api.getResource(id.toString()).subscribe(json => {
          this.resource = new Resource(json);
          console.log(this.resource)
        });
      }
    });
  }

  goBack() {
    this.location.back();
  }
}
