import { Component } from '@angular/core';
import { LoggingService } from './logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoggingService]
})
export class AppComponent {
  title = 'ShoppingCart';

   /*loadFeature = 'recipe';
  onNavigate(featureSelected: string){
    this.loadFeature = featureSelected;
    this.logger.onStatusChange(featureSelected);
  } */
  constructor(private logger: LoggingService){}
}
