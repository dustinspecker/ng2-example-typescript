import {bootstrap, Component, For, View} from 'angular2/angular2';
import {ListItem} from 'app/list-item/list-item';

@Component({
  selector: 'app'
})
@View({
  templateUrl: 'app/app.tpl.html',
  directives: [For, ListItem]
})
class App {
  items: Array<string>;

  constructor() {
    this.items = ['apple', 'pear', 'grape'];
  }
}

bootstrap(App);