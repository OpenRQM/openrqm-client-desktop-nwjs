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

/// Design
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { RQMMaterialModule } from './material-module'


/// For workspace-tree
import { TreeviewModule } from 'ngx-treeview';
import { RQMWorkspaceTreeComponent } from './rqmworkspace-tree/rqmworkspace-tree.component';
import { RQMMainComponent } from './rqmmain/rqmmain.component';
import { RQMWorkspaceTreeviewComponent } from './rqmworkspace-treeview/rqmworkspace-treeview.component';
import { FormsModule } from '@angular/forms';

/// For document-viewer
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';


/// For OpenRQM API
import { ApiModule } from 'openrqm-api';
import { HttpClientModule } from '@angular/common/http';
import { RQMWorkspaceMenubarComponent } from './rqmworkspace-menubar/rqmworkspace-menubar.component';
import { RQMDocumentViewerComponent } from './rqmdocument-viewer/rqmdocument-viewer.component';
import { RQMDocumentMenubarComponent } from './rqmdocument-menubar/rqmdocument-menubar.component';
import { RQMServerSettingsModalComponent } from './rqmserver-settings-modal/rqmserver-settings-modal.component';
import { RQMAddWorkspaceComponent } from './rqmadd-workspace/rqmadd-workspace.component';
import { RQMAddDocumentComponent } from './rqmadd-document/rqmadd-document.component';
import { RQMTracingComponent } from './rqmtracing/rqmtracing.component';
import { RQMDocumentExporterComponent } from './rqmdocument-exporter/rqmdocument-exporter.component';
import { RQMWorkspaceTreeviewItemPropertiesComponent } from './rqmworkspace-treeview-item-properties/rqmworkspace-treeview-item-properties.component';
import { RQMLoginComponent } from './rqmlogin/rqmlogin.component';
import { RQMRegisterComponent } from './rqmregister/rqmregister.component';
import { RQMUserSettingsModalComponent } from './rqmuser-settings-modal/rqmuser-settings-modal.component';
import { RQMDocumentEditorComponent } from './rqmdocument-editor/rqmdocument-editor.component';
import { RQMDocumentThemeComponent } from './rqmdocument-theme/rqmdocument-theme.component';
import { RQMAccessControlListComponent } from './rqmaccess-control-list/rqmaccess-control-list.component';
import { RQMAssignUsersComponent } from './rqmassign-users/rqmassign-users.component';
import { RQMAssignAccessGroupComponent } from './rqmassign-access-group/rqmassign-access-group.component';

@NgModule({
  declarations: [
    AppComponent,
    RQMWorkspaceTreeComponent,
    RQMMainComponent,
    RQMWorkspaceTreeviewComponent,
    RQMWorkspaceMenubarComponent,
    RQMDocumentViewerComponent,
    RQMDocumentMenubarComponent,
    RQMServerSettingsModalComponent,
    RQMAddWorkspaceComponent,
    RQMAddDocumentComponent,
    RQMTracingComponent,
    RQMDocumentExporterComponent,
    RQMWorkspaceTreeviewItemPropertiesComponent,
    RQMLoginComponent,
    RQMRegisterComponent,
    RQMUserSettingsModalComponent,
    RQMDocumentEditorComponent,
    RQMDocumentThemeComponent,
    RQMAccessControlListComponent,
    RQMAssignUsersComponent,
    RQMAssignAccessGroupComponent,
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
    BsDropdownModule.forRoot(),
    BrowserAnimationsModule,
    RQMMaterialModule,
    CKEditorModule,
  ],
  entryComponents: [
    RQMServerSettingsModalComponent,
    RQMAddDocumentComponent,
    RQMAddWorkspaceComponent,
    RQMDocumentMenubarComponent,
    RQMWorkspaceTreeviewItemPropertiesComponent,
    RQMUserSettingsModalComponent,
    RQMDocumentExporterComponent,
    RQMDocumentThemeComponent,
    RQMRegisterComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
