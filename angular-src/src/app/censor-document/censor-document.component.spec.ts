import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CensorDocumentComponent } from './censor-document.component';

describe('CensorDocumentComponent', () => {
  let component: CensorDocumentComponent;
  let fixture: ComponentFixture<CensorDocumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CensorDocumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CensorDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
