import { Link } from './link';


interface Serializable<T> {
    deserialize(input: Object): T;
}


export class Resource {
    /*
    * Les Timestamp sont des String 
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


    constructor() {

    }
}