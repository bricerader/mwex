import { Component, OnInit } from '@angular/core';

import { DocumentService } from '../services/document.service';
import { Document } from '../models/Document'

@Component({
  selector: 'app-view-document',
  templateUrl: './view-document.component.html',
  styleUrls: ['./view-document.component.css']
})
export class ViewDocumentComponent implements OnInit {

  //lists property which is an array of Document type
  private documents: Document[] = [];

  constructor(private documentServ: DocumentService) { }

  ngOnInit() {

    //Load all documents on init
    this.loadDocuments();
  }

  public loadDocuments() {

    //Get all documents from server and update the documents property
    this.documentServ.getAllDocuments().subscribe(
      response => this.documents = response,)
  }

  public onCensorDocument(newDocument) {
    this.documents = this.documents.concat(newDocument);
  }

  //deleteDocument. The deleted document is being filtered out using the .filter method
  public deleteDocument(document: Document) {
    this.documentServ.deleteDocument(document._id).subscribe(
      response =>    this.documents = this.documents.filter(documents => documents !== document),)
  }

}
