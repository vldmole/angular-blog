import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-content',
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit{

  photoUrl: string = "https://cdn.awsli.com.br/600x700/222/222813/produto/41476891/0dd2d15e7d.jpg";
  title: string = "Minha Noticia";
  description: string = "content__description";

  constructor(
    private router:ActivatedRoute
  ){}

  ngOnInit(): void {
    this.router.paramMap.subscribe(value => console.log(value.get("id")));
  }
}
