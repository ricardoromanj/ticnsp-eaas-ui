import { Component, Input } from '@angular/core';

@Component({
  selector: 'reading',
  template: `
    <h2>{{ readingTitle }}</h2>
    <p>{{ readingText }}</p> 
  `
})

export class Reading {
 @Input() readingTitle: string;
 @Input() readingText: string;
}
