import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-big-card',
  imports: [RouterModule],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent {

  @Input()
  id : string = "0";

  @Input()
  photoUrl: string = "./src/app/assets/Placeholder.png";

  @Input()
  title: string = "title";

  @Input()
  description: string = "description";

}
