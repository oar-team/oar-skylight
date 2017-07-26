import { MediaService } from "./../../shared/services/media/media.service";
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-upload",
  templateUrl: "./upload.component.html",
  styleUrls: ["./upload.component.scss"]
})
export class UploadComponent implements OnInit {
  public isCollapsed: Boolean = true;
  public file: File;

  @Input() path: string;
  @Output() refresh: EventEmitter<String> = new EventEmitter<String>();

  constructor(private media: MediaService) {}

  ngOnInit() {}

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
