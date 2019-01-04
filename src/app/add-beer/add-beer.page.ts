import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from '../rest-api.service';

@Component({
  selector: 'app-add-beer',
  templateUrl: './add-beer.page.html',
  styleUrls: ['./add-beer.page.scss'],
})
export class AddBeerPage implements OnInit {

  constructor(private router:Router, private beerService: RestApiService) { }

  ngOnInit() {
  }

  addBeer(form)
  {
    this.beerService.addBeer(form.value).subscribe(
      beer => { console.log(beer); }
    )
    console.log(form.value.name);
  }

  onSubmit(form){
      this.beerService.addBeer(form.form.value)
        .subscribe(beer => {
          this.router.navigate([`./list`]);
        });
    }
}
