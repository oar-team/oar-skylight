import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-job-state',
  templateUrl: './job-state.component.html',
  styleUrls: ['./job-state.component.scss']
})
/**
 * Possible States : 
 * Alive, Terminated, Running, Error, Waiting, Launching, Hold
 */
export class JobStateComponent implements OnInit {

  @Input() state: String;
  private color: String = '';
  constructor() { }
  ngOnInit() {
    if (this.state === 'Alive') {
      this.color = '#5cb85c';
    } else if (this.state === 'Error') {
      this.color = '#d9534f';
    } else if (this.state === 'Terminated') {
      this.color = '#0275d8';
    } else if (this.state === 'Running') {
      this.color = '#5cb85c';
    } else if (this.state === 'Waiting' || this.state ===  'Launching') {
      this.color = '#5bc0de';
    } else {
      this.color = '#777';
    }
  }

}
