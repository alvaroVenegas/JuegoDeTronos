import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from 'src/app/shared/services/characters.service';

@Component({
  selector: 'app-cronology-page',
  templateUrl: './cronology-page.component.html',
  styleUrls: ['./cronology-page.component.scss']
})
export class CronologyPageComponent implements OnInit {

  characters: any = []
  order: boolean = true;

  constructor(private charactersService: CharactersService) { }

  ngOnInit(): void {
    this.paintCharacters();
  }
 
  paintCharacters() {
    this.characters = [];
    this.charactersService.getCharacters().subscribe((charactersData: any) => {
      for (let i = 0; i < charactersData.length; i++) {
        const character = charactersData[i];
        if (character.age && character.age.age) {
          this.characters.push(character)
        }
      }
      if (this.order) {
        this.listCharactersAsc(this.characters);//de menor a mayor
      } else {
        this.listCharactersDesc(this.characters);// de mayor a menor
      }
    });
  }

  listCharactersAsc(listCharacters: any) {
    listCharacters.sort(function (a: any, b: any) {
      if (a.age.age > b.age.age) {
        return 1;
      }
      if (a.age.age < b.age.age) {
        return -1;
      }
      return 0;
    });
  }

  listCharactersDesc(listCharacters: any) {
    listCharacters.sort(function (a: any, b: any) {
      if (b.age.age > a.age.age) {
        return 1;
      }
      if (b.age.age < a.age.age) {
        return -1;
      }
      return 0;
    });
  }

  changeOrder() {
    this.order = !this.order
    this.paintCharacters();
  }
}
