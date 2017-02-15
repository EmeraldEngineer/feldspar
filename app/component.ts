import {Component} from "@angular/core";

@Component({
	selector: 'feldspar',
	templateUrl: './templates/feldspar.php'
})

export class AppComponent {
	navCollapse = true;

	toggleCollapse() {
		this.navCollapse = !this.navCollapse;
	}
}