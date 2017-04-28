/**
 * Created by thilinap on 4/25/2017.
 */
import {Injectable} from '@angular/core';
import {Http, Response, Headers, URLSearchParams, RequestOptions} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs';

@Injectable()
export class AppService{


  constructor(private http: Http){}

  getData(){
    return this.http.get('http://localhost:8080/contract/view.json')
      .map((response: Response) => response.json() );
  }

  search(obj: any){
    const body = JSON.stringify(obj);
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.post('http://localhost:8080/search.json', body,
      {headers: headers}
    )
      .map((response: Response) => response.json() )
      .catch(this.handelError);
  }

  private handelError(error : any){
    console.log(error);
    return Observable.throw(error.json);
  }

  viewContract(){
    return this.http.get('http://localhost:8080/contract/view.json')
      .map((response: Response) => response.json() );
  }

  viewRoomContract(id){
    const params: URLSearchParams = new URLSearchParams();
    params.set('id', id);
    return this.http.get('http://localhost:8080/contract/viewRoomContract.json',{
      search: params
    })
      .map((response: Response) => response.json() );
  }


  getCountry(){
    return this.http.get('http://localhost:8080/getCountry')
      .map((response: Response) => response.json() );
  }

  getCity(){
    const params: URLSearchParams = new URLSearchParams();
    params.set('id', '4');
    return this.http.get('http://localhost:8080/getCity', {
      search: params
    })
      .map((response: Response) => response.json() );
  }

  getHotel(){
    const params: URLSearchParams = new URLSearchParams();
    params.set('id', '141');
    return this.http.get('http://localhost:8080/getHotel', {
      search: params
    })
      .map((response: Response) => response.json() );
  }


  addContracts(obj : any){
    const body = JSON.stringify(obj);
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.post('http://localhost:8080/contract/add.json', body,
      {headers: headers}
    )
      .map((response: Response) => response.json() )
      .catch(this.handelError);
  }
}
