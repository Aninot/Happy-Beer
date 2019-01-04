import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../rest-api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Beer } from '../beer';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  key: string;
  beer: Object;

  constructor(private route: ActivatedRoute, private http: HttpClient, private beerService: RestApiService) {
    this.route.params
    .subscribe( params => this.key = params.key)
}

  ngOnInit() {
    this.getBeerByKey(this.key);
  } 

  getBeerByKey(key){
    this.beerService.getBeerByKey(key)
    .subscribe(data => {
     this.beer = data;
     console.log(this.beer);
     console.log(data);
    });
}
}