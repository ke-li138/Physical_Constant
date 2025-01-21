import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ConstantService } from '../constant.service';
import { LatexService } from '../math-jax.service';

@Component({
  selector: 'app-constant',
  templateUrl: './constant.component.html',
  styleUrl: './constant.component.css',
  providers: [ConstantService, LatexService]
})
export class ConstantComponent {
  @Input() constant: any;
  @Output() onclickEvent = new EventEmitter<string>();
  constructor (private constantService: ConstantService, private latexService: LatexService) { }
  clickOn(name: any) {
    alert(`clicked on ${name}`);
    this.onclickEvent.emit(name);
  }
  ngOnInit() {
    this.constant.symbol = this.latexService.LatextoStr(this.constant.symbol);
    this.constant.name = this.latexService.LatextoStr(this.constant.name);
    this.constant.value = this.latexService.LatextoStr(this.constant.value);
  }
}
