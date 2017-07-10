import { MediaService } from './../../shared/services/media/media.service';
import { FmItem } from './../models/fm-item.interface';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-delete-item',
  templateUrl: './delete-item.component.html',
  styleUrls: ['./delete-item.component.scss'],
  animations: [
      trigger('flyInOut', [
        state('in', style({transform: 'translateX(0)'})),
        transition('void => *', [
          style({transform: 'translateX(-100%)'}),
          animate(100)
        ]),
        transition('* => void', [
          animate(0, style({transform: 'translateX(100%)'}))
        ])
      ])
  ]
})
export class DeleteItemComponent implements OnInit {

  isClicked: Boolean = false;
  @Input() item: FmItem;
  @Input() path: string;
  @Output() refresh: EventEmitter<String> = new EventEmitter<String>();
  constructor(private media: MediaService) { }

  ngOnInit() {
  }

  deleteClick() {
    this.isClicked = !this.isClicked;
  }
  /**
   * Use media service to delete a file
   * TODO : Display validation message before delete
   */
  deleteItem() {
     this.media.deleteMedia(this.generatePath(this.item)).subscribe(
       succes => this.refresh.next(''),
       err => console.log(err)
     );
  }


  /**
   * Generate an URI for a given item in the current folder
   */
  private generatePath(item: FmItem) {

    if (this.path.slice(-1) !== '/') {
      this.path += '/';
    }
    const path = this.path + item.name;

    return path;
  }


}
