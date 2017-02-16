import {Component, ViewChild} from '@angular/core';
import {Router, ActivatedRoute, RouterLink} from '@angular/router';
import {OarApiService} from '../../shared/oar-api/oar-api.service';
import {JobsStore} from '../../shared/stores/jobs-store';
import {Job} from '../../shared/oar-api/model/job';
import {Link} from '../../shared/oar-api/model/link';

@Component({
  moduleId: module.id,
  selector: 'job-details',
  templateUrl: './job-details.html',
  providers: [OarApiService]
})

export class JobDetails {

  @ViewChild('jobDetailsTable') jobDetailsTable: any;
  id: number;
  stdout: string = "Hello";
  job: Job;
  buttonState: Number;
  messageButton = "Display details";

  constructor(private route: ActivatedRoute,
              private router: Router,
              private apiService: OarApiService,
              private jobStore: JobsStore) {
    this.job = new Job();
    this.buttonState = 1;
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      this.job = this.jobStore.getJob(this.id.toString());


    });

  }


  /**
   *    Récupère le json d'un job
   */
  getJob(id: string) {
    let jsonJob: any;

    this.apiService.getJob(id)
      .subscribe(
        data => this.setJob(data),
        error => console.log(error)
      );
  }

  /**
   *  Populate job with json
   */
  setJob(json: any) {
    console.log(json);
    this.job = new Job().deserialize(json);
    console.log(this.job);
  }

  getDetails() {

    if (this.buttonState == 0) {
      this.buttonState = 1;
      this.messageButton = "Display Details";
      this.jobDetailsTable.nativeElement.style = "display:none;"
      this.getJob(this.id.toString());
    } else {
      this.buttonState = 0;
      this.messageButton = "Hide Details";
      this.jobDetailsTable.nativeElement.style = "display:block;"
    }
  }

  onClickLink(link: Link) {
    console.log('route : ' + link.href);
  }

}
