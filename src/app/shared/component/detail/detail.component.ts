import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from '../../services/characters.service';
import { HousesService } from '../../services/houses.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  constructor(private charactersService: CharactersService,
    private route: ActivatedRoute,
    private houseService: HousesService) { }

  character: any;
  house: any;

  ngOnInit(): void {

    this.route.paramMap.subscribe((params) => {
      const nameCharacter = params.get('nameCharacter');
      this.charactersService.getCharacter(nameCharacter).subscribe((result) => {
        this.character = result;
        this.houseService.getHouse(this.character.house).subscribe((result) => {
          this.house = result;
          console.log(this.house)
        })
      })
    })
  }
}

