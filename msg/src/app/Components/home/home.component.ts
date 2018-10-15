import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/Interfaces/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title= "Home";
  friends : IUser [] ;


  constructor(private router:Router) {


    let usuario1: IUser = {
      nick: 'Eduardo',
      age: 24,
      email: 'ed@aoe.aoe',
      friend: true,
      uid: 1
    };
    let usuario2: IUser = {
      nick: 'Freddy',
      age: 28,
      email: 'fred@aoe.aoe',
      friend: true,
      uid: 2
    };
    let usuario3: IUser = {
      nick: 'Yuliana',
      age: 18,
      email: 'yuli@aoe.aoe',
      friend: true,
      uid: 3
    };
    let usuario4: IUser = {
      nick: 'Ricardo',
      age: 17,
      email: 'rick@aoe.aoe',
      friend: false,
      uid: 4
    };
    let usuario5: IUser = {
      nick: 'Marcos',
      age: 30,
      email:'marcos@aoe.aoe',
      friend: false,
      uid: 5
    };

    this.friends = [usuario1,usuario2,usuario3,usuario4,usuario5]

   }

  ngOnInit() {      
  }

}
