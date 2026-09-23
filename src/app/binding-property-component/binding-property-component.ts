import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-property-component',
  standalone: false,
  styleUrl: './binding-property-component.css',
  templateUrl: './binding-property-component.html',
})
export class BindingPropertyComponent {
  public name:string="Đỗ Thị Ngọc Huyền"
  public email:string="huyendtnk24411e@st.uel.edu.vn"
  public nameid:string="nameid"
  public emailid:string="emailid"
  public isDisabled:boolean= false
  public hello:string="Wellcome to K2411E"
  public red_color:string="red"
  public advanced_mesage:string='<font color="blue">This is advance message</font>'
}

