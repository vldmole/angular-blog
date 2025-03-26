import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule} from '@angular/router';
import { dataFake, NewsFake } from '../../data/datFake';

@Component({
  selector: 'app-content',
  imports: [RouterModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit{
  id: string | null = "0";

  photoUrl: string = "photo url";
  title: string = "Minha Noticia";
  description: string = "descrição do conteúdo";

  constructor(
    private router:ActivatedRoute
  ){}

  ngOnInit(): void {
    this.router.paramMap.subscribe(value => this.id = value.get("id"));
    this.setContent(this.id);
  }

  setContent(id: string | null)
  {
    console.log(id);
     const result: NewsFake = dataFake.filter(value => value.id.toString() == id )[0];

     console.log(result);
     if(!result)
      return;

     this.photoUrl = result.photoUrl;
     this.title = result.title;
     this.description = result.description;
  }
}
