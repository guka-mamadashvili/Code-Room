import { Component, Input, OnInit } from '@angular/core';
import { Developers } from '../../../developers-data';
import { DataService } from '../../data-service.service';

@Component({
  selector: 'app-developer-content',
  templateUrl: './developer-content.component.html',
  styleUrls: ['./developer-content.component.scss']
})
export class DeveloperContentComponent implements OnInit {

  sharedData: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.sharedData = this.dataService.getSharedProperty();
  }

}
