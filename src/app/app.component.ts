import { Component } from '@angular/core';
import '../../public/css/styles.css';
@Component({
  selector: 'my-app',
  template: `
	<main>
		<h1>Hello from Angular 2 App with Webpack</h1>
	</main>
`,
  styles: [require('./app.component.css')]
})
export class AppComponent { }