import { Link } from "./link";

export class Resource {
  /*
    * Timestamps are string
    */
  public apiTimestamp: string;
  public availableUpTo: string;
  // TODO : Verifier YES / No
  public bestEffort: string;
  public core: number;
  public cpu: number;
  public cpuset: number;
  // TODO : Verifier YES / No
  public deploy: string;
  // TODO : Verifier YES / No
  public desktopComputing: string;
  // TODO : Verifier YES / No
  public drain: string;
  public expiryDate: number;
  // TODO : Verifier YES / No
  public finaudDecision: string;
  // TODO : nodeX - a changer
  public host: string;
  public id: number;
  public lastAvailableUpto: number;
  public lastJobDate: string;
  public links: Array<Link>;
  public mem: number;
  // Voir host
  public networkAddress: string;
  public nextFinaudDecision: string;
  public nextState: string;
  public schedulerPriority: number;
  public state: string;
  public stateNum: number;
  public suspendedJobs: string;
  public type: string;

  constructor(json) {
    this.apiTimestamp = json.api_timestamp || null;
    this.availableUpTo = json.available_upto || null;
    this.bestEffort = json.besteffort || null;
    this.core = json.cre || null;
    this.cpu = json.cpu || null;
    this.cpuset = json.cpuset || null;
    this.deploy = json.deploy || null;
    this.desktopComputing = json.desktop_computing || null;
    this.drain = json.drain || null;
    this.expiryDate = json.expiry_date || null;
    this.finaudDecision = json.finaud_decision || null;
    this.host = json.host || null;
    this.id = json.id || null;
    this.lastAvailableUpto = json.last_available_upto || null;
    this.lastJobDate = json.last_job_date || null;
    this.mem = json.mem || null;
    this.networkAddress = json.network_address || null;
    this.nextState = json.next_state || null;
    this.nextFinaudDecision = json.next_finaud_decision || null;
    this.schedulerPriority = json.scheduler_priority || null;
    this.state = json.state || null;
    this.stateNum = json.state_num || null;
    this.suspendedJobs = json.suspended_jobs || null;
    this.type = json.type || null;

    this.links = new Array<Link>();

    // Link implementation for a Job
    if (json.links) {
      for (const element of json.links) {
        const link: Link = new Link().deserialize(element);

        /*
        *  Since we don't know where to split the string ("/oar-priv/" can change)
        *  we split on "/jobs" to avoid trouble and then add "jobs" to form a link route that look like : jobs/1/nodes
        */
        const arrStr = link.api_href.split("/jobs");
        link.href = "jobs" + arrStr[1];

        this.links.push(link);
      }
    }
  }
}
