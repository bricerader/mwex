import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Document } from '../models/Document';
import { DocumentService } from '../services/document.service';

@Component({
  selector: 'app-censor-document',
  templateUrl: './censor-document.component.html',
  styleUrls: ['./censor-document.component.css']
})
export class CensorDocumentComponent implements OnInit {
  private newDocument :Document;
  @Output() censorDocument: EventEmitter<Document> = new EventEmitter<Document>();

  constructor(private documentServ: DocumentService) { }

  ngOnInit() {
    this.newDocument = {
      censor:'',
      documentToCensor:'',
      _id:''
    }
  }

  public onSubmit() {
    this.censor();

    this.documentServ.censorDocument(this.newDocument).subscribe(
      response=> {
        console.log(response);
        if(response.success== true)
          this.censorDocument.emit(this.newDocument);
      },
    );

    /*this.newDocument._id = '';
    this.newDocument.documentToCensor = '';
    this.newDocument.censor = '';*/
  }

  /**
   * Censor comma or space delimited text to 'XXXX'
   */
  private censor() {
    let documentToCensor = this.newDocument.documentToCensor;
    let censor = this.newDocument.censor;

    // if censor has single or double quotes, remove
    censor = censor.replace(/['"]+/g, '');
    censor = censor.replace(/[, ]+/g, ',');

    let censorArray = censor.split(',');

    // loop through censorArray to replace any words needed censoring
    for (let i = 0; i < censorArray.length; i++) {
      let item = censorArray[i];

      documentToCensor = documentToCensor.replace(item, 'XXXX');
    }

    this.newDocument.documentToCensor = documentToCensor;
  }
}
