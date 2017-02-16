import { Link } from './link';

/*
*  About json to object in typescript :
*    http://stackoverflow.com/a/22886730 : option 4
*/
interface Serializable<T> {
    deserialize(input: Object): T;
}


/**
* TODO : Description JobEvent
*/
export class JobEvent {
     date: string;
     description: string;
     eventId: number;
     jobId: number;
     toCheck: string;
     type: string;


    deserialize(input :any) {
        this.date = input.date;
        this.description = input.description;
        this.eventId = input.event_id;
        this.jobId = input.job_id;
        this.toCheck = input.to_check;
        this.type = input.type;

        return this;
    }
}


/**
* TODO : Description Job
*/
export class Job {
    public json:any;
    public apiTimestamp: string;
    public arrayId: number;
    public arrayIndex: number;
    public command: string;
    public cpusetName: string;
    public events: JobEvent[];
    public exitCode: number;
    public id: number;
    public initialRequest: string;
    public links: Link[];
    public message: string;
    public name: string;
    public owner: string;
    public project: string;
    public properties: string;
    public queue: string;
    public reservation: string;
    public resubmitJobId: number;
    public scheduledStart: string;
    public startTime: number;
    public state: string;
    public stderrFile: string;
    public stdoutFile: string;
    public stopTime: number;
    public submissionTime: number;
    public type: string;
    public types: String[];
    public walltime: number;
    public wantedResources: string;
    constructor() {
        this.links = new Array<Link>();
        this.events = new Array<JobEvent>();
    }

    deserialize(input :any) {
        this.apiTimestamp   =	input.api_timestamp;
        this.arrayId        =	input.array_id;
        this.arrayIndex     =	input.array_index;
        this.command        =	input.command;
        this.cpusetName     =	input.cpuset_name;
        this.exitCode       =	input.exit_code;
        this.id             =	input.id;
        this.initialRequest =	input.initial_request;
        this.message        =	input.message;
        this.name           =	input.name;
        this.owner          =	input.owner;
        this.project        =	input.project;
        this.properties     =	input.properties;
        this.queue          =	input.queue;
        this.reservation    =	input.reservation;
        this.resubmitJobId  =	input.resubmit_job_id;
        this.scheduledStart =	input.scheduled_start;
        this.startTime      =	input.start_time;
        this.state          =	input.state;
        this.stderrFile     =	input.stderr_file;
        this.stdoutFile     =	input.stdout_file;
        this.stopTime       =	input.stop_time;
        this.submissionTime =	input.submission_time;
        this.type           =	input.type;
        this.types          =	input.types;
        this.walltime       =	input.walltime;
        this.wantedResources=	input.wanted_resources;

        // Link implementation for a Job
        for(let element of input.links) {
            let link:Link = new Link().deserialize(element);

            /*
            *  Since we don't know where to split the string ("/oar-priv/" can change)
            *  we split on "/jobs" to avoid trouble and then add "jobs" to form a link route that look like : jobs/1/nodes
            */
            let arrStr = link.api_href.split('/jobs');
            link.href = 'jobs' + arrStr[1];

            this.links.push(link);
        }

          for(let element of input.events) {
            this.events.push(new JobEvent().deserialize(element));
        }

        this.json = input;

        return this;
    }

}
