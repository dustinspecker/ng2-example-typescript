import {Component, View} from 'angular2/angular2';

@Component({
  selector: 'list-item',
  properties: {
    name: 'name'
  }
})
@View({
  replace: true,
  template: `
    {{name}}
  `
})
export class ListItem {
  name: string;
  
  constructor() {
  }
}