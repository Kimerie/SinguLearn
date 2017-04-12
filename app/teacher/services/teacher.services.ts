import {Injectable}                              from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable}                              from 'rxjs/Observable';
import {Base64}                                  from 'js-base64';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
  export class TeacherService {
    constructor (private _http: Http){}
    private studentApiUrl: '/api/students';

    getStudentInfo (): Observable <Response> {
      return this._http.get(this.studentApiUrl)
        .map((res:Response) => res.json())
        .catch(this.handleError);
    };

    updateContentList (lessons: Array<String>): Observable <Response> {
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });

      return this._http.post(this.studentApiUrl, {lessons}, options)
        .map((res:Response) => res.json())
        .catch(this.handleError);
    };

    private extractData(res: Response) {
      let body = res.json();
      return body.data || { };
    }
    private handleError(error:Response) {
      console.error(error)
      return Observable.throw(error.json().error || 'Server error')
    };
  };
