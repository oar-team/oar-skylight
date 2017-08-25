import {XHRBackend, Request, XHRConnection, Response} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
 
export class CustomXHRBackend extends XHRBackend {
 
  createConnection(request: Request): XHRConnection {
    let connection: XHRConnection = super.createConnection(request);
    // Before returning the connection we try to catch all possible errors(4XX,5XX and so on)
    connection.response = connection.response.catch(this.processResponse);
    return connection;
  }
 
  processResponse(response:Response){
    switch (response.status) {
      case 403:
        // You could redirect to forbidden page here
        return Observable.throw('your custom error here');
      case 404:
        // You could redirect to 404 page here
        return Observable.throw('your custom error here');
      default:
        return Observable.throw(response);
    }
  }
 
}