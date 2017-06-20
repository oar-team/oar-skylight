import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-job-state',
  templateUrl: './job-state.component.html',
  styleUrls: ['./job-state.component.scss']
})
export class JobStateComponent implements OnInit {

  @Input() state: String;
  private color: String = '';
  constructor() { }
  ngOnInit() {
    if (this.state === 'Alive') {
      this.color = '#5cb85c';
    } else if (this.state === 'Error') {
      this.color = '#d9534f';
    } else {
      this.color = '#777';
    }
  }

}
