import { Component } from '@angular/core';
import { ConstantService } from '../constant.service';
import { LatexService } from '../math-jax.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-constant-detail',
  templateUrl: './constant-detail.component.html',
  styleUrl: './constant-detail.component.css',
  providers: [ConstantService, LatexService]
})
export class ConstantDetailComponent {
  constant: any = {};
  constantShowed: any = {}
  constructor (
    private route: ActivatedRoute,
    private constantService: ConstantService,
    private latextService: LatexService,
    private router: Router) { }
  
  getConstant(): void {
    const id: any = this.route.snapshot.paramMap.get('id');
    console.log(this.constant)
    this.constantService.getConstant(id)
      .subscribe((constant: any) => {
        this.constant = constant;
        this.constantShowed.symbol = this.latextService.LatextoStr(constant.symbol);
        this.constantShowed.name = this.latextService.LatextoStr(constant.name);
        this.constantShowed.value = this.latextService.LatextoStr(constant.value);

        console.log(constant);
      });
  }

  updateConstant(obj: any): void {
    
    // set the constant properties from the form properties
    this.constant.name = obj.nameField;
    this.constant.symbol = obj.symbolField;
    this.constant.value = obj.valueField;

    // call the constantService update method
    this.constantService.updateConstant(this.constant._id, this.constant)
      .subscribe({
        next: (result) => {
          location.reload();
        },
        error: (error) => {
          console.error('There was an error!', error);
        }
      });
  }

  deleteOn(): void {
    if (confirm(`Are you sure you want to delete ${this.constant.name}?`)){
      console.log(`deleting ${this.constant._id}`);
      this.constantService.deleteConstant(this.constant._id)
        .subscribe((result)=>{
          alert(`Consatnt ${this.constant.name} has been deleted`);
          this.router.navigate(['/gallery']);
        })
      }
  }


  ngOnInit() {
    this.getConstant();
  }
}
