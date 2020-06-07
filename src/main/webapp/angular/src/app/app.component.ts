import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'TODOApp';
  routeParam = '';

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}
  ngOnInit(){
    this.routeParam = this.router.url;
    console.log(this.routeParam);
    
  }
}  
  

