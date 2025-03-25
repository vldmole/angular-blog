import { Component } from '@angular/core';
import { RouterOutlet, withDebugTracing, withRouterConfig } from '@angular/router';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { bootstrapApplication } from '@angular/platform-browser';
import { MenuBarComponent } from "./components/menu-bar/menu-bar.component";



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-blog';
}

bootstrapApplication(AppComponent,
  {
    providers: [
      provideRouter(routes,
        withDebugTracing(),
        withRouterConfig({paramsInheritanceStrategy: 'always'}))
    ]
  }
);
