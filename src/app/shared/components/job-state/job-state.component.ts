import { Component, OnInit, Input } from "@angular/core";

/**
 * Possible States : 
 * Alive, Terminated, Running, Error, Waiting, Launching, Hold
 */
@Component({
  selector: "app-job-state",
  templateUrl: "./job-state.component.html",
  styleUrls: ["./job-state.component.scss"]
})
export class JobStateComponent implements OnInit {
  // Given state
  @Input() state: String;
  // css color property
  color: String = "";

  constructor() {}
  /**
   * On init value, we change the color
   * 
   * @memberof JobStateComponent
   */
  ngOnInit() {
    if (this.state === "Alive") {
      this.color = "#5cb85c";
    } else if (this.state === "Error") {
      this.color = "#d9534f";
    } else if (this.state === "Terminated") {
      this.color = "#0275d8";
    } else if (this.state === "Running") {
      this.color = "#5cb85c";
    } else if (this.state === "Waiting" || this.state === "Launching") {
      this.color = "#5bc0de";
    } else {
      this.color = "#777";
    }
  }
}
