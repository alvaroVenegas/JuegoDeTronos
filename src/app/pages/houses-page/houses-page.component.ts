import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousesService } from 'src/app/shared/services/houses.service';

@Component({
  selector: 'app-houses-page',
  templateUrl: './houses-page.component.html',
  styleUrls: ['./houses-page.component.scss']
})
export class HousesPageComponent implements OnInit {
  houses:any[]=[];
  textToFilter: any;

  constructor(private housesService: HousesService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.housesService.getHouses().subscribe((housesData:any) => {
      this.houses = housesData;
    });

    this.route.paramMap.subscribe((params) => {
      const nameHouses= params.get('nameHouses');
    });
  }
}