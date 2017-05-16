import { FmItem } from './../models/fm-item.interface';
import { MediaService } from './../../shared/services/media/media.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fm',
  templateUrl: './fm.component.html',
  styleUrls: ['./fm.component.scss']
})
export class FmComponent implements OnInit {

  private folderItems: FmItem[] = [];
  private uri: string;
  private filePreview: string;
  private filterQuery: string = '';

  constructor(private media: MediaService) {
    this.uri = '~/';
    this.getDirectory(this.uri);
  }

  getDirectory(uri: string) {
    console.log('getDir', uri);
    this.uri = uri;

    this.media.list(uri).subscribe(
      (res: any) => {
        const resBody = JSON.parse(res._body);
        this.folderItems = resBody.items;
      }
    );

  }

  ngOnInit() {
  }

  onClickItem(item: FmItem) {
    if (item.type === 'd') {
      this.getDirectory(this.uri + item.name);
    }

  }

  reload() {
    this.getDirectory(this.uri);
  }

  deleteItem(item: FmItem) {

    this.media.deleteMedia(this.generatePath(item)).subscribe(
      succes => this.reload(),
      err => console.log(err)
    );
  }

  private generatePath(item: FmItem) {

    if (this.uri.slice(-1) !== '/') {
      this.uri += '/';
    }
    const path = this.uri + item.name;

    return path;
  }

  uploadedFiles: any[] = [];

  onUpload(event) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }
  }


}
