/*
openrqm-client-desktop-nwjs
RQMDocumentsExporter Component Controller
SPDX-License-Identifier: GPL-2.0-only
Copyright (C) 2019 Benjamin Schilling
*/

import { Component, OnInit, Inject } from '@angular/core';

import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { RQMSettingsService } from '../rqmsettings.service';
import { RQMUserService } from '../rqmuser.service';
import { ExportService } from 'openrqm-api'

@Component({
  selector: 'app-rqmdocument-exporter',
  templateUrl: './rqmdocument-exporter.component.html',
  styleUrls: ['./rqmdocument-exporter.component.css']
})
export class RQMDocumentExporterComponent implements OnInit {

  closeResult: string;
  documentId: number;
  exportType: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private rqmExportService: ExportService, private settingsService: RQMSettingsService, private userService: RQMUserService) {
    this.rqmExportService.configuration.basePath = this.settingsService.getApiBasePath();
    this.rqmExportService.configuration.apiKeys = {};
    this.rqmExportService.configuration.apiKeys['token'] = this.userService.getToken();
    this.documentId = data.documentId;
    this.exportType = data.type;

  }

  ngOnInit() {
  }

  exportDocument() {
    if (this.exportType == "pdf") {
      this.rqmExportService.exportPdf(this.documentId, 1).subscribe(
        next => {
          console.log(next);
          const url = window.URL.createObjectURL(next);
          window.open(url);
        },
        err => {
          console.log(err);
        },
        () => {
          console.log('export PDF document done');
        }
      );
    } else if (this.exportType == "markdown") {
      this.rqmExportService.exportMarkdown(this.documentId, 1).subscribe(
        next => {
          console.log(next);
          const url = window.URL.createObjectURL(next);
          window.open(url);
        },
        err => {
          console.log(err);
        },
        () => {
          console.log('export markdown document done');
        }
      );
    } else {
      console.log("unhandled exporter");
    }
  }

}
