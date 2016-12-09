import { Component } from '@angular/core';
import { OarApiService } from '../../shared/oar-api/oar-api.service';
import { Job } from '../../shared/oar-api/model/job';
import { Link } from '../../shared/oar-api/model/link';
import { List} from 'immutable/';
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs/Rx";
import { Router } from '@angular/router';

@Component({
	moduleId: module.id,
    selector: 'jobs-page',
    templateUrl: './jobs.html',
    providers: [OarApiService]
})

export class JobsComponent {
    
    jobs :BehaviorSubject<List<Job>> = new BehaviorSubject(List([]));

    constructor(
        private apiService: OarApiService,
        private router: Router    
    ){  
    }
    
    ngOnInit() {
        
        this.apiService.getJobs()
            .subscribe(
                data => this.loadJobs(data),
                error => console.log(error)
            );

        let arrayId = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
        
        arrayId.forEach(element => {
            this.apiService.getJob(element)
                .subscribe(
                    data =>  this.addJob(data),
                    error => console.log(error)
                );
        });

    }

    getJobs(){
       return this.jobs.getValue().toArray();
    }
    
    // Charge un ensemble de jobss
    loadJobs(data:any) {
        for(let items of data.items) {
            let id:string = "" + items.id;
            this.getJob(id);
        }
    }
    
    /*
    *    Récupère le json d'un job
    */    
    getJob(id:string){
        let jsonJob:any;

        this.apiService.getJob(id)
            .subscribe(
                data =>  this.addJob(data),
                error => console.log(error)
            );
    }
    
    /*
    *    Ajout un job à this.jobs
    */
    addJob(json:any) {
            let j:Job = new Job().deserialize(json);
            this.jobs.next(this.jobs.getValue().push(j));
    }
    
    gotoJob(id:string) {
        this.router.navigate(['dashboard/jobs/' + id]);
    }
 }
