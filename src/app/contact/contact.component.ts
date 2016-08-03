import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'contact',
  styles: [`
.Left {
  flex: 1 550px;
  padding-right:15px;
  display:flex;
  display: webkit-flex;
  flex-direction: column;
  justify-content: space-between;
}
.Left h2{
  margin-left:30px;
}

.Right {
  flex: 1 550px;
  padding-left:35px;
}
.Right h2{
  margin: 10px 0px 0px -20px;
}
.first{
  margin-top:0px !important;
}
h3{
  margin:0px;
}
  `],
  templateUrl: './contact.template.html' 
})
export class Contact {

}
