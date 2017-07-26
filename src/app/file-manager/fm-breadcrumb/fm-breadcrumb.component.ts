import { BreadcrumbLink } from "./../models/breadcrumb-link.interface";
import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";

/**
 * Display a Breadcrumb for the file manager. 
 * Import from parent component an uri. 
 * Emit a goTo Event to change current location.
 * 
 * @export
 * @class FmBreadcrumbComponent
 * @implements {OnInit}
 */
@Component({
  selector: "app-fm-breadcrumb",
  templateUrl: "./fm-breadcrumb.component.html",
  styleUrls: ["./fm-breadcrumb.component.scss"]
})
export class FmBreadcrumbComponent {
  /**
   * Given URI from FmComponent
   * 
   * @type {string}
   * @memberof FmBreadcrumbComponent
   */
  @Input() uri: string;

  /**
   * Redirect to a folder.
   * Call getDirectory from parent FmComponent
   */
  @Output() goTo = new EventEmitter<string>();

  elements: BreadcrumbLink[];

  /**
   * Creates an instance of FmBreadcrumbComponent.
   * @memberof FmBreadcrumbComponent
   */
  constructor() {
    this.elements = [];
  }

  /**
   * Generate an array of {@link BreadcrumbLink} for the breadcrumb into {@link FmBreadcrumbComponent#elements} property
   * 
   * @memberof FmBreadcrumbComponent
   */
  ngOnChanges() {
    this.elements = [];
    const arrSplit = this.uri.split("/");

    arrSplit.forEach(item => {
      let tempArray = this.uri.split("/");
      let link = "";
      const index = arrSplit.indexOf(item);
      tempArray.length = index + 1;
      link = tempArray.join("/") + "/";

      if (item === "~") {
        this.elements.push({ name: "~", link: "~/" });
      } else {
        if (item !== "") {
          this.elements.push({ name: item, link: link });
        }
      }
    });
  }

  goto(link: string) {
    this.goTo.next(link);
    this.uri = link;
  }
}
