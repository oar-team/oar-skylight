import { element } from 'protractor';
import { FmItem } from './../models/fm-item.interface';
import { MediaService } from './../../shared/services/media/media.service';
import { Component, OnInit, OnChanges, Output, EventEmitter } from '@angular/core';

import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-fm',
  templateUrl: './fm.component.html',
  styleUrls: ['./fm.component.scss']
})
export class FmComponent implements OnInit {
  
  // Item list for the current directory
  folderItems: FmItem[] = [];

  // Current directory
  uri: string;
  filePreview: string;
  // query for the datatable, use by data-filter.pipe
  filterQuery: string = '';
  selectedFile: FmItem;

  uploadedFiles: any[] = [];
  uploadUrl: string = '';

  constructor(private media: MediaService, public activeModal: NgbActiveModal) {
    this.uri = '~/';
    this.getDirectory(this.uri);
  }

  /**
   *  Change the current directory given an URI
   */
  getDirectory(uri: string) {
    this.uri = uri;

    this.media.list(uri)
    .subscribe(
      (res: any) => {
        const resBody = JSON.parse(res._body);
        this.folderItems = resBody.items;
      }
    );

    this.uriChange();

  }

  ngOnInit() {
    this.uriChange();
  }


  uriChange() {
    this.uploadUrl = this.media.getBaseUrl() + this.uri;
  }

  onClickItem(item: FmItem) {

    // if item is a folder, change current directory
    if (item.type === 'd') {
      this.getDirectory(this.uri + item.name);
    } else {
      // If item is a file, we select the file
      this.selectedFile = item;
    }

  }

  reload() {
    this.getDirectory(this.uri);
  }

  downloadItem(item: FmItem) {
    this.media.getMedia(this.generatePath(item)).subscribe(
      res => {console.log(res)},
      err => console.log(err)
    );
  }

  /**
   * Generate an URI for a given item in the current folder
   */
  private generatePath(item: FmItem) {

    if (this.uri.slice(-1) !== '/') {
      this.uri += '/';
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

  refresh(event) {
    console.log('refresh')
    this.reload();
  }


}
