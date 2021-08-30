import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousesService } from '../../services/houses.service';

@Component({
  selector: 'app-detail-house',
  templateUrl: './detail-house.component.html',
  styleUrls: ['./detail-house.component.scss']
})
export class DetailHouseComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private housesService: HousesService) { }

    house:any;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const nameHouse = params.get('nameHouse');
      this.housesService.getHouse(nameHouse).subscribe((result) =>{
        this.house = result
        console.log(this.house)
      });
    });
  };
}
