import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OarApiService } from '../../shared/oar-api/oar-api.service';
import { Job } from '../../shared/oar-api/model/job';

@Component({
	moduleId: module.id,
	selector: 'job-details',
	templateUrl: './job-details.html',
  providers: [OarApiService]
})

export class JobDetails { 
    id: number;
    job : Job;
    
    constructor(
      private route: ActivatedRoute,
      private apiService :OarApiService
      ) 
    {
      this.job = new Job();
    }

    ngOnInit() {
      this.route.params.subscribe(params => {
         this.id = +params['id']; // (+) converts string 'id' to a number
      });

      this.getJob(this.id.toString());

    }

        
    /*
    *    Récupère le json d'un job
    */    
    getJob(id:string){
        let jsonJob:any;

        this.apiService.getJob(id)
            .subscribe(
                data =>  this.setJob(data),
                error => console.log(error)
            );
    }
    
    /*
    *  Populate job with json
    */
    setJob(json:any){
        this.job = new Job().deserialize(json);
        console.log(this.job);
        
    }

}
