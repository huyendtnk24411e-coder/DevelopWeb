import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-style-component',
  standalone: false,
  styleUrl: './binding-style-component.css',
  templateUrl: './binding-style-component.html',
})
export class BindingStyleComponent {

  progressValue: number = 10;
  statusColor: string = 'red';

  ngOnInit() {
    setInterval(() => {
      if (this.progressValue < 100) {
        this.progressValue += 10;

        if (this.progressValue <= 20) {
          this.statusColor = 'yellow';
        } 
        else if (this.progressValue <= 30) {
          this.statusColor = 'orange';
        } 
        else if (this.progressValue <= 40) {
          this.statusColor = 'blue';
        } 
        else if (this.progressValue <= 50) {
          this.statusColor = 'cyan';
        } 
        else if (this.progressValue <= 60) {
          this.statusColor = 'green';
        } 
        else if (this.progressValue <= 70) {
          this.statusColor = 'purple';
        } 
        else if (this.progressValue <= 80) {
          this.statusColor = 'blue';
        } 
        else if (this.progressValue <= 90) {
          this.statusColor = 'blue';
        } 
        else {
          this.statusColor = 'pink';
        }
      }
    }, 1000);
  }

  isCritical(): boolean {
    return this.progressValue > 80;
  }
  }
