import { NotificationsService } from "angular2-notifications";
import { Http, Headers, ResponseContentType } from "@angular/http";
import { AuthenticationService } from "./../../shared/services/auth/authentification.service";
import { OarApiService } from "./../../shared/services/oar-api/oar-api.service";
import { element } from "protractor";
import { FmItem } from "./../models/fm-item.interface";
import { MediaService } from "./../../shared/services/media/media.service";
import {
  Component,
  OnInit,
  OnChanges,
  Output,
  EventEmitter
} from "@angular/core";

import { NgbModal, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import * as FileSaver from "file-saver";

/**
 * Parent Component for the FileManager.
 * Uri is passed to childrens and refresh() is used to respond to refresh events
 * @export
 * @class FmComponent
 * @implements {OnInit}
 */
@Component({
  selector: "app-fm",
  templateUrl: "./fm.component.html",
  styleUrls: ["./fm.component.scss"]
})
export class FmComponent implements OnInit {
  /**
   *  Item list for the current directory
   * 
   * @type {FmItem[]}
   * @memberof FmComponent
   */
  folderItems: FmItem[] = [];

  /**
   * Current directory
   * 
   * @type {string}
   * @memberof FmComponent
   */
  uri: string;

  /**
   *
   * @type {string}
   * @memberof FmComponent
   */
  filePreview: string;

  /**
   * Query for the datatable, use by data-filter.pipe
   * 
   * @type {string}
   * @memberof FmComponent
   */
  filterQuery: string = "";

  selectedFile: FmItem;

  uploadedFiles: any[] = [];

  uploadUrl: string = "";

  constructor(
    private media: MediaService,
    public activeModal: NgbActiveModal,
    private auth: AuthenticationService,
    private http: Http,
    private notifications: NotificationsService
  ) {
    this.uri = "~/";
    this.getDirectory(this.uri);
  }

  /**
   *  Change the current directory given an URI
   */
  getDirectory(uri: string) {
    this.uri = uri;

    this.media.list(uri).subscribe((res: any) => {
      const resBody = JSON.parse(res._body);
      this.folderItems = resBody.items;
    });

    this.uriChange();
  }

  /**
   * Init the directory
   * 
   * @memberof FmComponent
   */
  ngOnInit() {
    this.uriChange();
  }

  /**
   * Update uploadUrl
   * 
   * @memberof FmComponent
   */
  uriChange() {
    this.uploadUrl = this.media.getBaseUrl() + this.uri;
  }

  /**
   * Select a file or enter a directory on click
   * 
   * @param {FmItem} item 
   * @memberof FmComponent
   */
  onClickItem(item: FmItem) {
    // if item is a folder, change current directory
    if (item.type === "d") {
      this.getDirectory(this.uri + item.name);
    } else {
      // If item is a file, we select the file
      this.selectedFile = item;
    }
  }

  /**
   * Refresh from the current location
   * 
   * @memberof FmComponent
   */
  reload() {
    this.getDirectory(this.uri);
  }

  /**
   * Download a file. TODO : Work on uri encode
   * 
   * @param {FmItem} item 
   * @memberof FmComponent
   */
  downloadItem(item: FmItem) {
    const url = this.media.getBaseUrl() + this.generatePath(item);
    const user = this.auth.getUser();
    const headers: Headers = new Headers();
    headers.append(
      "Authorization",
      "Basic " +
        btoa(
          this.auth.getUser().getUsername() +
            ":" +
            this.auth.getUser().getPassword()
        )
    );

    headers.append("Content-Type", "application/json");
    headers.append("Accept", "application/octet-stream");

    const req = this.http.get(url, {
      headers: headers,
      responseType: ResponseContentType.ArrayBuffer
    });
    req.subscribe(
      res => {
        const blob = new Blob([res.blob()]);
        FileSaver.saveAs(blob, item.name);
        //window.saveAs(blob, filename);
      },
      err => {
        this.notifications.error(
          "Download failed",
          item.name + " could not be download"
        );
      }
    );
  }

  /**
   * Generate an URI for a given item in the current folder
   */
  private generatePath(item: FmItem) {
    if (this.uri.slice(-1) !== "/") {
      this.uri += "/";
    }
    const path = this.uri + item.name;

    return path;
  }

  /**
   * Emit an event with the URI of the selected File
   */
  selectFile(selectedFile: FmItem) {
    this.activeModal.close(this.generatePath(selectedFile));
  }

  /**
   * Trigger by refresh events from children component. (Used when a file is delete for example) This function reload the current location
   * 
   * @param {any} event 
   * @memberof FmComponent
   */
  refresh(event) {
    console.log("refresh");
    this.reload();
  }
}
