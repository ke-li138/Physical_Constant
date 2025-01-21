import { Component, Input } from '@angular/core';
import { ConstantService } from '../constant.service';
import { LatexService } from "../math-jax.service";
// import {DomSanitizer, SafeHtml} from "@angular/platform-browser";
// import { extractMath } from 'extract-math'

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css',
  providers: [ConstantService]
})
export class GalleryComponent {
  constantList: any = [ConstantService];

  constructor (private constantService: ConstantService) { }
  
  handleClick(event: any):void {
    console.log("app-component recieved click from " + event);
  }

  updateConst(event: any): void {
    console.log(event);
    this.constantService.listConstants().subscribe((constants) => {
      console.log(constants);
      this.constantList = constants;
    })
  }

  getConstNum() {
    return this.constantList.length
  }

  ngOnInit() {
    this.updateConst("Initiate the Constants");
  }
}
