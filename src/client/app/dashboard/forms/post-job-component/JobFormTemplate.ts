export class JobFormTemplate {

  nodes :number
  name :string
  properties:string
  cpu: number
  script:string
  types:string
  walltime:string
  directory: string
  reservationDates :string

  constructor () {
    this.name = "test_job"
    this.nodes = 1
    this.script = "/bin/sleep 300"
    this.walltime = "00:30"
    this.cpu = 1
  }

  getResource() :string {
    let str = "/nodes=" + this.nodes;
    str += "/cpu=" + this.cpu;
    str += ",walltime=" + this.walltime + ":00";

    return str
  }

  getName() {
    return this.name
  }

  getCommand() {
    return this.script
  }


  getDirectory() {
    return this.directory
  }


  getProperty() {
    return this.properties
  }


  getType() {
    return this.types
  }


  getReservation() {
    return this.reservationDates
  }

}
