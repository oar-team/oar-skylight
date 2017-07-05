import { MediaService } from './../../shared/services/media/media.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  public isCollapsed: Boolean = true;
  public file: File;

  @Input() path: string;
  constructor(private media: MediaService) { }


  ngOnInit() {
  }

  fileChanged(e: Event) {
    const target: HTMLInputElement = e.target as HTMLInputElement;
    for (let i = 0; i < target.files.length; i++) {
      this.file = target.files[0];
    }
  }

  upload() {
    if (this.file) {
      this.media.uploadMedia(this.path, this.file);
    }
  }

}
