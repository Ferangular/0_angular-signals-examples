import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signal-example2',
  standalone: true,
  imports: [CommonModule],
  template: `
  <h2>Example 2 - Auto increment count</h2>

<span>
  Count: {{ count() }}
</span>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class SignalExample2Component {
  count = signal(0);

  constructor() {
    setInterval(() => this.count.set(this.count() + 1), 1000);
  }
}
