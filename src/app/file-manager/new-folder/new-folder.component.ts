import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { MediaService } from './../../shared/services/media/media.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-new-folder',
  templateUrl: './new-folder.component.html',
  styleUrls: ['./new-folder.component.scss']
})
export class NewFolderComponent implements OnInit {

  public isInputVisible = false;
  public folderName: String;
  @Input() path: string;
  @Output() refresh: EventEmitter<String> = new EventEmitter<String>();

  newFolderForm = new FormGroup ({
    name: new FormControl('', Validators.pattern('^[A-Za-z][A-Za-z0-9]*$'))
  });

  constructor(private media: MediaService) { }

  ngOnInit() {
  }

  createFolder() {
    this.media.createFolder(this.path + '/' + this.folderName)
    .subscribe(res => {
      this.refresh.next('');
    });
  }

}
