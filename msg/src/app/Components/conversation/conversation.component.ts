import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IUser } from 'src/app/Interfaces/User';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss']
})
export class ConversationComponent implements OnInit {

  

  constructor(private router:Router,
    private activateRoute: ActivatedRoute) { 
     

      
  }


  ngOnInit() {
    let user: IUser = {
      nick: '',
      age: 0,
      email: '',
      friend: false,
      uid: 0
    };

    user.uid= Number(this.activateRoute.snapshot.params['uid']);
    console.log(user)
  }

}
