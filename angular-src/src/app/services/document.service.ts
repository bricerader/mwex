import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { Document } from '../models/Document'

import 'rxjs/add/operator/map';

@Injectable()
export class DocumentService {

  constructor(private http: Http) { }

  private serverApi= 'http://localhost:3000';

  public getAllDocuments():Observable<Document[]> {

    let URI = `${this.serverApi}/documentcensor/`;
    return this.http.get(URI)
      .map(res => res.json())
      .map(res => <Document[]>res.documents);
  }

  public censorDocument(document: Document) {
    let URI = `${this.serverApi}/documentcensor/`;
    let headers = new Headers;
    let body = JSON.stringify({censor: document.censor, documentToCensor: document.documentToCensor});
    console.log(body);
    headers.append('Content-Type', 'application/json');
    return this.http.post(URI, body ,{headers: headers})
      .map(res => res.json());
  }

  public deleteDocument(documentId : string) {
    let URI = `${this.serverApi}/documentcensor/${documentId}`;
    let headers = new Headers;
    headers.append('Content-Type', 'application/json');
    return this.http.delete(URI, {headers})
      .map(res => res.json());
  }
}
