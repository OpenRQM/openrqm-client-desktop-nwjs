import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rqmaccess-control-list',
  templateUrl: './rqmaccess-control-list.component.html',
  styleUrls: ['./rqmaccess-control-list.component.css']
})
export class RQMAccessControlListComponent implements OnInit {

  @Input() workspaceId: number;

  constructor() { }

  ngOnInit() {
  }

}
