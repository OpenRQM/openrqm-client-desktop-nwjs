/*
openrqm-client-desktop-nwjs
App Modules
SPDX-License-Identifier: GPL-2.0-only
Copyright (C) 2019 Benjamin Schilling
*/


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/// For workspace-tree
import { TreeviewModule } from 'ngx-treeview';
import { RQMWorkspaceTreeComponent } from './rqmworkspace-tree/rqmworkspace-tree.component';
import { RQMMainComponent } from './rqmmain/rqmmain.component';
import { RQMWorkspaceTreeviewComponent } from './rqmworkspace-treeview/rqmworkspace-treeview.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

/// For document-viewer
import { AngularSlickgridModule } from 'angular-slickgrid';

/// Menubar
import { NgbModule, NgbModal } from '@ng-bootstrap/ng-bootstrap'

/// For OpenRQM API
import { ApiModule, BASE_PATH } from 'openrqm-api';
import { HttpClientModule } from '@angular/common/http';
import { RQMWorkspaceMenubarComponent } from './rqmworkspace-menubar/rqmworkspace-menubar.component';
import { RQMDocumentViewerComponent } from './rqmdocument-viewer/rqmdocument-viewer.component';
import { RQMDocumentMenubarComponent } from './rqmdocument-menubar/rqmdocument-menubar.component';
import { RQMElementViewerComponent } from './rqmelement-viewer/rqmelement-viewer.component';
import { RQMElementViewerPreloadComponent } from './rqmelement-viewer-preload/rqmelement-viewer-preload.component';
import { RQMSettingsComponent } from './rqmsettings/rqmsettings.component';
import { RQMAddWorkspaceComponent } from './rqmadd-workspace/rqmadd-workspace.component';
import { RQMAddDocumentComponent } from './rqmadd-document/rqmadd-document.component';
import { RQMTracingComponent } from './rqmtracing/rqmtracing.component';
import { RQMDocumentExporterComponent } from './rqmdocument-exporter/rqmdocument-exporter.component';

@NgModule({
  declarations: [
    AppComponent,
    RQMWorkspaceTreeComponent,
    RQMMainComponent,
    RQMWorkspaceTreeviewComponent,
    RQMWorkspaceMenubarComponent,
    RQMDocumentViewerComponent,
    RQMDocumentMenubarComponent,
    RQMElementViewerComponent,
    RQMElementViewerPreloadComponent,
    RQMSettingsComponent,
    RQMAddWorkspaceComponent,
    RQMAddDocumentComponent,
    RQMTracingComponent,
    RQMDocumentExporterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TreeviewModule.forRoot(),
    FormsModule,
    FontAwesomeModule,
    ApiModule,
    HttpClientModule,
    NgbModule,
    AngularSlickgridModule.forRoot(),
  ],
  entryComponents: [
    RQMElementViewerComponent,
    RQMElementViewerPreloadComponent,
    RQMSettingsComponent,
    RQMAddDocumentComponent,
    RQMAddWorkspaceComponent,
    RQMDocumentMenubarComponent
  ],
  providers: [{ provide: BASE_PATH, useValue: 'http://127.0.0.1:8090/api/v1' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
