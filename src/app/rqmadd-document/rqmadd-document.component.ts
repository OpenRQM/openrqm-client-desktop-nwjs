/*
openrqm-client-desktop-nwjs
RQMAddDocument Component Controller
SPDX-License-Identifier: GPL-2.0-only
Copyright (C) 2019 Benjamin Schilling
*/

import { Component, OnInit, ViewChild, Input } from '@angular/core';

import { DocumentsService, RQMDocument } from 'openrqm-api'
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { RQMSettingsService } from '../rqmsettings.service';
@Component({
  selector: 'app-rqmadd-document',
  templateUrl: './rqmadd-document.component.html',
  styleUrls: ['./rqmadd-document.component.css']
})
export class RQMAddDocumentComponent implements OnInit {

  settingService: RQMSettingsService;
  documentService: DocumentsService;

  @ViewChild('documentName', { static: false }) documentName;
  @ViewChild('shortName', { static: false }) shortName;
  @ViewChild('description', { static: false }) description;
  @ViewChild('confidentiality', { static: false }) confidentiality;
  @ViewChild('authorId', { static: false }) authorId;
  @ViewChild('reviewerText', { static: false }) reviewerText;
  @ViewChild('approverId', { static: false }) approverId;
  @ViewChild('languageId', { static: false }) languageId;
  @ViewChild('externalIdentifier', { static: false }) externalIdentifier;

  @Input() public parentId: any;

  constructor(documentSerivce: DocumentsService, public activeModal: NgbActiveModal, settingsService: RQMSettingsService) {
     
    this.settingService = settingsService;
    this.documentService = documentSerivce;   
    this.documentService.configuration.basePath = this.settingService.getApiBasePath();
  }

  ngOnInit() {
  }

  addDocument() {
    let document = {} as RQMDocument;
    document.id = 0;
    document.workspaceId = this.parentId;
    document.internalIdentifier = 0;
    document.externalIdentifier = this.externalIdentifier.nativeElement.value;
    document.name = this.documentName.nativeElement.value;
    document.shortName = this.shortName.nativeElement.value;
    document.description = this.description.nativeElement.value;
    document.confidentiality = this.confidentiality.nativeElement.value;
    document.authorId = this.authorId.nativeElement.value;
    document.reviewerText = this.reviewerText.nativeElement.value;
    document.approverId = this.approverId.nativeElement.value;
    document.languageId = this.languageId.nativeElement.value;
    document.lastModifiedById = 0;
    document.lastModifiedOn = new Date(5000);
    document.baselineMajor = 0;
    document.baselineMinor = 0;
    document.baselineReview = 0;
    document.previousBaselineId = null;

    this.documentService.postDocument(document).subscribe(
      next => {
        console.log('next');
        console.log(next);
      },
      err => {
        console.log('err');
        console.log(err);
      },
      () => {
        console.log('add document done');
      }
    );
    this.passBack();
    window.location.reload();
  }

  passBack() {
    this.activeModal.close();
  }

}