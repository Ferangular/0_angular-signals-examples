import { ChangeDetectionStrategy, Component } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { interval, take } from 'rxjs';

@Component({
  selector: 'app-signal-example7',
  standalone: true,
  template:`

<h2>Example 7 - observable to a signal</h2>
<p>Counter - {{ counter() }}</p>
<p>Counter with intial value - {{ counterWithIntialValue() }}</p>
<p>Counter to up 5 - {{ counterUpto5() }}</p>

  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class SignalExample5Component {
  counter$ = interval(1000);
  counter = toSignal(this.counter$);

  counter2$ = interval(1000);
  counterWithIntialValue = toSignal(this.counter2$, { initialValue: 0 });

  counter3$ = interval(1000).pipe(take(6));
  counterUpto5 = toSignal(this.counter3$);
}
