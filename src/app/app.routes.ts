
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';
import { Route } from '@angular/router';

export const routes : Route[] = [
  { path:'',        component: HomeComponent    },
  { path:'content/:id', component: ContentComponent }
];
