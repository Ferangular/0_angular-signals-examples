import { ChangeDetectionStrategy, Component, effect, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-signal-example8',
  standalone: true,
  template:`
  <h2>Example 8 - use signal with side effect</h2>

<p>
  Side effects mean code that calls an API or do any operation not related to the signal.
  for that, we can use an effect().
</p>

<p>Count - {{ count() }}</p>

<button mat-raised-button color="primary" (click)="updateCount()">
  Update Count
</button>

  `,
  imports: [MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class SignalExample8Component {
  count = signal(1000);

  countEffect = effect(() => console.log(this.count()));

  updateCount() {
    this.count.update((count) => count + 1);
  }
}
