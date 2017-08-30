import { UserConfigStore } from "./../../../shared/stores/user-config-store";
import { Resource } from "./../../../shared/services/oar-api/model/resource";
import { Location } from "@angular/common";
import { ActivatedRoute, Router } from "@angular/router";
import { OarApiService } from "./../../../shared/services/oar-api/oar-api.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-resource-details",
  templateUrl: "./resource-details.component.html",
  styleUrls: ["./resource-details.component.scss"]
})
export class ResourceDetailsComponent implements OnInit {
  public resource: Resource;
  public resourceKeys = [];
  public resourceParametersToDisplay = [];
  public jobs = [];

  constructor(
    private api: OarApiService,
    private route: ActivatedRoute,
    private location: Location,
    private userConfig: UserConfigStore,
    private router: Router
  ) {
    this.resource = new Resource({});

    this.userConfig.getConfigObs().subscribe(config => {
      this.resourceParametersToDisplay = config.resourceDetailProperties;
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = +params["id"]; // cast into a number;

      // If id is a proper number
      if (!isNaN(id)) {
        this.api.getResource(id.toString()).subscribe(json => {
          this.resource = new Resource(json);
          console.log(this.resource);

          this.resourceKeys = Object.keys(this.resource.json);
          this.resourceKeys.sort();

          this.getResourceJob(this.resource);
        });
      }
    });
  }

  getResourceJob(resource: Resource) {
    this.api.getResourceJob(resource.id.toString()).subscribe(res => {
      console.log(res);
      this.jobs = res.items;
    });
  }

  goBack() {
    this.location.back();
  }

  addPropertyToPref(key: string) {
    this.userConfig.addResourceDetailsProperty(key);
    console.log("add " + key);
  }

  unsetPropertyToPref(key: string) {
    this.userConfig.unsetResourceDetailsProperty(key);
    console.log("unset " + key);
  }

  goToJob(id: string) {
    this.router.navigate(["./jobs/" + id]);
  }
}
