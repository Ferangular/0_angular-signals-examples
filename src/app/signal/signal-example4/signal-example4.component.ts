import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-signal-example4',
  standalone: true,
  template:
  `    <h2>Example 4 - computed</h2>
    <button mat-raised-button color="primary"  (click)="increaseCount()">Increase</button>
    <p>
      count -> {{ count() }}
    </p>
    <p>
      Computed count = {{ count() }} + 2 -> {{ doubleCount() }}
    </p>

  `,

  imports: [FormsModule, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class SignalExample4Component {
  count = signal(0);
  doubleCount = computed(() => this.count() + 2);

  increaseCount() {
    this.count.update(() => this.count() + 1);
  }
}
