import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-signal-example1',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  template: `
  <h2>Example 1 - Count Increment/Decrement</h2>
<p>Count is: {{ count() }}</p>
<p>
  <button
    mat-raised-button
    style="margin-right: 1rem"
    color="primary"
    (click)="increaseCount()"
  >
    Increase
  </button>
  <button mat-raised-button color="primary" (click)="decreaseCount()">
    Decrease
  </button>
</p>

  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class SignalExample1Component {
  count = signal<number>(1);

  increaseCount() {
    this.count.update((count) => count + 1);
  }

  decreaseCount() {
    this.count.update((count) => count - 1);
  }
}
