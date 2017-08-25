import { Resource } from "./../../shared/services/oar-api/model/resource";
import { OarApiService } from "./../../shared/services/oar-api/oar-api.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-usage",
  templateUrl: "./usage.component.html",
  styleUrls: ["./usage.component.scss"]
})
export class UsageComponent implements OnInit {
  public resources = {};

  constructor(private api: OarApiService) {}

  ngOnInit() {
    this.api.getResources().subscribe((data: any) => {
      this.resources = data.items.reduce(function(result, current) {
        result[current.network_address] = result[current.network_address] || [];
        result[current.network_address].push(current);
        return result;
      }, {});

      console.log(this.resources);
    });
  }

}
