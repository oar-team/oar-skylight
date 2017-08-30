import { MediaService } from "./../../shared/services/media/media.service";
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

/**
 * Upload a file to a location in distant server
 * 
 * 
 * @export
 * @class UploadComponent
 * @implements {OnInit}
 */
@Component({
  selector: "app-upload",
  templateUrl: "./upload.component.html",
  styleUrls: ["./upload.component.scss"]
})
export class UploadComponent {
  // Is Form visible
  public isCollapsed: Boolean = true;
  // The file to update
  public file: File;

  // Current location
  @Input() path: string;
  // Send a refresh event to FmComponent
  @Output() refresh: EventEmitter<String> = new EventEmitter<String>();

  constructor(private media: MediaService) {}

  /**
   * Only take the first file of target.files
   * 
   * @param {Event} e
   * @memberof UploadComponent
   */
  fileChanged(e: Event) {
    const target: HTMLInputElement = e.target as HTMLInputElement;
    for (let i = 0; i < target.files.length; i++) {
      this.file = target.files[0];
    }
  }

  /**
   * Upload a file
   * 
   * MediaService take care of notifications
   */
  upload() {
    if (this.file) {
      const req = this.media.uploadMedia(this.path, this.file);

      req.subscribe(res => {
        // If upload successfull
        this.isCollapsed = true;
        this.refresh.next("");
      });
    }
  }
}
