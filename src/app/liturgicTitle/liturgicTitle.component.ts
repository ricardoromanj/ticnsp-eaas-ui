import { Component, Input } from '@angular/core';

@Component({
  selector: 'liturgic-title',
  template: `
    <h1>{{ title }}</h1>
    <p>{{ saint }}</p>
  `
})

export class LiturgicTitle {
 @Input() title: string;
 @Input() saint: string;
}
