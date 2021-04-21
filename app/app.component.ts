import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LoginModule';

  buttonTitle:string = "Login";
 visible:boolean = true;
 showhideUtility(){
   this.visible = this.visible?false:true;
   this.buttonTitle = this.visible?"Login":" ";
 }
}
