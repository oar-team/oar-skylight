import { BreadcrumbLink } from './../models/breadcrumb-link.interface';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-fm-breadcrumb',
  templateUrl: './fm-breadcrumb.component.html',
  styleUrls: ['./fm-breadcrumb.component.scss']
})
export class FmBreadcrumbComponent implements OnInit {

  @Input() uri: string;

  /**
   * Redirect to a folder.
   * Call getDirectory from parent FmComponent
   */
  @Output() goTo = new EventEmitter<string>();

  private elements: BreadcrumbLink[];
  constructor() {
    this.elements = [];
  }

  ngOnInit() {

  }

  ngOnChanges() {
    this.elements = [];
    const arrSplit = this.uri.split('/');


    arrSplit.forEach(item => {

      console.log('item', item);
      let tempArray = this.uri.split('/');
      let link = '';
      const index = arrSplit.indexOf(item);
      tempArray.length = index + 1;
      link = tempArray.join('/') + '/';

      if (item === '~') {
        this.elements.push({ name: '~', link: '~/' });
      } else {
        if (item !== '') {
          this.elements.push({ name: item, link: link });
        }
      }

    });
  }


  goto(link: string) {
    console.log('goto', link);
    this.goTo.next(link);
    this.uri = link;
  }

}
