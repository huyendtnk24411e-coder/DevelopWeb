import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-two-way-component',
  standalone: false,
  styleUrl: './binding-two-way-component.css',
  templateUrl: './binding-two-way-component.html',
})
export class BindingTwoWayComponent {
  hsa:number=0
  hsb:number=0
  hsc:number=0
  result:string="result here"
    giaiPtb2() {

    if (this.hsa == 0) {

      // a = 0, b = 0, c = 0
      if (this.hsb == 0 && this.hsc == 0) {
        this.result = "INFINITYYY";
      }

      // a = 0, b = 0, c != 0
      else if (this.hsb == 0 && this.hsc != 0) {
        this.result = "Phương trình vô nghiệm";
      }

      // Phương trình bậc nhất
      else {
        this.result = "No = " + (-this.hsc / this.hsb);
      }

    }

    else {

      // Phương trình bậc 2
      let delta = Math.pow(this.hsb, 2) - 4 * this.hsa * this.hsc;

      // Delta < 0
      if (delta < 0) {
         this.result="<font color='red'>Phương trình vô nghiệm</font>"
      }

      // Delta = 0
      else if (delta == 0) {
        let x = -this.hsb / (2 * this.hsa);
        this.result = "x1 = x2 = " + x;
      }

      // Delta > 0
      else {
        let x1 = (-this.hsb - Math.sqrt(delta)) / (2 * this.hsa);
        let x2 = (-this.hsb + Math.sqrt(delta)) / (2 * this.hsa);

        this.result = "X1 = " + x1 + " ; X2 = " + x2;
      }
    }
  }
}