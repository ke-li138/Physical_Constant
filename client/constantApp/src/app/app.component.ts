import { Component } from '@angular/core';
// import { ConstantComponent } from './constant/constant.component';
import { ConstantService } from './constant.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [ConstantService]
})
export class AppComponent {
}
