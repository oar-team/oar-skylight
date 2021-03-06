import { FormControl, FormGroup, Validators } from "@angular/forms";
import { EventEmitter } from "@angular/core";
import { Output } from "@angular/core";
import { MediaService } from "./../../shared/services/media/media.service";
import { Component, OnInit, Input } from "@angular/core";
import {
  trigger,
  state,
  style,
  animate,
  transition
} from "@angular/animations";

/**
 * Component for the creation of a folder on remote server.
 * 
 * @export
 * @class NewFolderComponent
 * @implements {OnInit}
 */
@Component({
  selector: "app-new-folder",
  templateUrl: "./new-folder.component.html",
  styleUrls: ["./new-folder.component.scss"],
  animations: [
    trigger("flyInOut", [
      state("in", style({ transform: "translateX(0)" })),
      transition("void => *", [
        style({ transform: "translateX(100%)" }),
        animate(150)
      ]),
      transition("* => void", [
        animate(50, style({ transform: "translateX(100%)" }))
      ])
    ])
  ]
})
export class NewFolderComponent {
  // Hide or show form
  public isInputVisible = false;

  // foldername
  public folderName: String;

  /**
   * Current path location
   * 
   * @type {string}
   * @memberof NewFolderComponent
   */
  @Input() path: string;

  /**
   * Send FmComponent a refresh event
   * 
   * @type {EventEmitter<String>}
   * @memberof NewFolderComponent
   */
  @Output() refresh: EventEmitter<String> = new EventEmitter<String>(true);

  /**
   * Folder name control
   * 
   * @memberof NewFolderComponent
   */
  newFolderForm = new FormGroup({
    name: new FormControl("", Validators.pattern("^[A-Za-z][A-Za-z0-9]*$"))
  });

  constructor(private media: MediaService) {}

  /**
   * Create folder at current location
   */
  createFolder() {
    this.media
      .createFolder(this.path + "/" + this.folderName)
      .subscribe(res => {
        this.refresh.next("");
      });
  }
}
