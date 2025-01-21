import { Component, Output, EventEmitter } from '@angular/core';
import { ConstantService } from '../constant.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new-constant',
  templateUrl: './new-constant.component.html',
  styleUrl: './new-constant.component.css',
  providers: [ConstantService]
})
export class NewConstantComponent {
  @Output() newConstant = new EventEmitter()

  constant: any = {}

  constructor(private constantService: ConstantService) {}

  ngOnInit(){ }

  // called onSubmit
  save(newConstantForm: any) : void {
    // // set the constant properties from the form properties
    // this.constant.name = newConstantForm.nameField;
    // this.constant.symbol = newConstantForm.symbolField;
    // this.constant.value = newConstantForm.valueField;

    // call the constantService update method
    this.constantService.createConstant(this.constant)
      .subscribe((result) => {
        console.log(result)
        this.newConstant.emit(this.constant);
        newConstantForm.reset();
        this.constant = {};
    });
  }
}
