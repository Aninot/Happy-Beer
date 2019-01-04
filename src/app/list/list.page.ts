import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { RestApiService } from '../rest-api.service';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  
  public items: Array<{ title: string; note: string; icon: string }> = [];
  beers: any[]=[];
  constructor(public api: RestApiService, public loadingController: LoadingController) { }

  ngOnInit(){
    this.getBeers();
  }

  getBeers(): void {
       this.api.getBeers()
           .subscribe(data => {
               let cle = Object.keys(data);
               let donnees = Object.values(data);
               for (let i = 0; i < cle.length; i++) {
                 this.beers.push({key: cle[i], values: donnees[i]});
               }
           });
   }
}