/*
openrqm-client-desktop-nwjs
RQMDocumentViewer Component Controller
SPDX-License-Identifier: GPL-2.0-only
Copyright (C) 2019 Benjamin Schilling
*/

// Angular
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

// OpenRQM
import { LinksService, RQMLink } from 'openrqm-api';
import { RQMSettingsService } from '../rqmsettings.service';
import { RQMUserService } from '../rqmuser.service';
import { LinkWrapper } from '../rqmdocument-editor/rqmdocument-editor.component'
import { RQMMultiLineSnackBarComponent } from '../rqmmulti-line-snack-bar/rqmmulti-line-snack-bar.component';

@Component({
  selector: 'app-rqmdocument-viewer',
  templateUrl: './rqmdocument-viewer.component.html',
  styleUrls: ['./rqmdocument-viewer.component.css']
})
export class RQMDocumentViewerComponent implements OnInit {

  detailViewRowCount = 9;
  id: string;

  reloadSubscription: any;

  // For linking
  doLinking: boolean = false;
  startLinkElement: number = 0;
  startLinkDocument: number = 0;
  showDocumentEditor: boolean = false;
  linkingDocumentId: number = -1;

  // For View
  requirementColor: string = "#acecde";
  proseColor: string = "#adadad";

  constructor(private router: Router, private route: ActivatedRoute, private settingsService: RQMSettingsService, private linksService: LinksService, private userService: RQMUserService
  ) {
    this.linksService.configuration.basePath = this.settingsService.getApiBasePath();
    this.linksService.configuration.apiKeys = {};
    this.linksService.configuration.apiKeys['token'] = this.userService.getToken();
    // For reloading the page
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    this.reloadSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Trick the Router into believing it's last link wasn't previously loaded
        this.router.navigated = false;
      }
    });

  }

  ngOnInit(): void {

  }

  // For reloading the page
  ngOnDestroy() {
    if (this.reloadSubscription) {
      this.reloadSubscription.unsubscribe();
    }
  }

  onDoLinking(doLinking: boolean) {
    console.log('emitted doLinking');
    this.doLinking = doLinking;
    if (this.doLinking == false) {
      this.showDocumentEditor = false;
      this.linkingDocumentId = -1;
    }
  }

  onCreateLinkFrom(wrappedLink: LinkWrapper) {
    console.log('create link from document ' + wrappedLink.documentId + ' with element id' + wrappedLink.elementId);
    this.startLinkElement = wrappedLink.elementId;
    this.startLinkDocument = wrappedLink.documentId;
  }

  onCreateLinkTo(wrappedLink: LinkWrapper) {
    console.log('create link to document ' + wrappedLink.documentId + ' with element id' + wrappedLink.elementId);
    let newLink = {} as RQMLink;
    newLink.fromElementId = this.startLinkElement;
    newLink.fromDocumentId = this.startLinkDocument;
    newLink.toElementId = wrappedLink.elementId;
    newLink.toDocumentId = wrappedLink.documentId;
    newLink.linkTypeId = 1;
    this.linksService.linkElement(newLink).subscribe(
      next => {
        console.log('next');
        console.log(next);
      },
      err => {
        console.log('err');
        console.log(err);
      },
      () => {
        console.log('linking elements done');
      }
    );
  }

  onSelectedDocument(documentId: number) {
    console.log("Show document editor, document id: " + documentId);
    this.showDocumentEditor = true;
    this.linkingDocumentId = documentId;
  }

  onRequirementColorChange(color: string) {
    this.requirementColor = color;
  }

  onProseColorChange(color: string) {
    this.proseColor = color;
  }
}