// import { Component, ViewChild  } from '@angular/core';
// // import { ChildComponent } from './child.component';
// import { PostComponent } from './post/post.component';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent {
//   title = 'my-angular-app';
//   parentMessage: string = 'Message changed';
//   @ViewChild(PostComponent) childComp: PostComponent;

// }
// app.component.ts
import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // corrected styleUrls
})
export class AppComponent implements AfterViewInit {
  title = 'my-angular-app';
  parentMessage: string = 'Message changed';
  message:string="";

  @ViewChild(PostComponent) childComp!: PostComponent; // Ensure non-null assertion

  ngAfterViewInit() {
    // interacting with child component after view initialization
    console.log(this.childComp); // Access child component properties or methods here
    this.message = this.childComp.childMessage;
  }
}
