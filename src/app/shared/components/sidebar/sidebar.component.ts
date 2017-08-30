import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { User } from "./../../models/user";
import { AuthenticationService } from "./../../services/auth/authentification.service";
import { Component } from "@angular/core";
import { FmComponent } from "../../../file-manager/fm/fm.component";

/**
 * This is the 'menu' component
 * 
 * @export
 * @class SidebarComponent
 */
@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent {
  isActive = false;
  // Hide or display the sidebar
  showMenu = "";
  /**
     * Current user if it exist. 
     * Used to display or hide links
     * 
     * @type {User}
     * @memberof SidebarComponent
     */
  user: User;
  constructor(
    private auth: AuthenticationService,
    private modalService: NgbModal
  ) {
    this.auth.getUserObservable().subscribe(user => (this.user = user));
  }
  /**
     * Hide the sidebar
     * 
     * @memberof SidebarComponent
     */
  eventCalled() {
    this.isActive = !this.isActive;
  }

  addExpandClass(element: any) {
    if (element === this.showMenu) {
      this.showMenu = "0";
    } else {
      this.showMenu = element;
    }
  }

  /**
     * Open a FileManager Modal
     * 
     * @memberof SidebarComponent
     */
  openExplorer() {
    console.log("openExplorer");
    const modalRef = this.modalService.open(FmComponent, { size: "lg" });
    modalRef.result.then().catch(err => console.log(err));
  }
}
