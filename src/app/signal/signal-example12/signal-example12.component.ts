import { ChangeDetectionStrategy, Component, effect, signal, untracked } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'signal-example12',
  standalone: true,
  template:`
  <h2>Example 12 - untracked signal</h2>

<div>
  <p>Counter 1 - {{ counter1() }}</p>
  <button mat-raised-button color="primary" (click)="updateCounter1()">
    Update Counter 1
  </button>
</div>

<div>
  <p>Counter 2 - {{ counter2() }}</p>
  <button mat-raised-button color="primary" (click)="updateCounter2()">
    Update Counter 2
  </button>
</div>

<b>
  To review the changes, view the console, if we update the counter 1 then we
  are using effect to loging the update but in case of the counter 2 update then
  we are untrack the updates.
</b>


  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatButtonModule]
})
export default class SignalExample12Component {
  counter1 = signal(1);
  counter2 = signal(1);

  counterUpdate$ = effect(() => {
    console.log(this.counter1(), untracked(() => this.counter2()));
  });

  updateCounter1(){
    this.counter1.update(() => this.counter1() + 1)
  }

  updateCounter2(){
    this.counter2.update(() => this.counter2() + 1)
  }

}
