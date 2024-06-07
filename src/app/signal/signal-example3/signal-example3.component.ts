import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-signal-example3',
  standalone: true,
  template:`
  <h2>Example 3 - Update name using the input</h2>

<div>
  <mat-form-field>
    <mat-label>Enter your name</mat-label>
    <input matInput #myName (input)="updateName(myName.value)">
  </mat-form-field>

  My Name is: {{ name() }}
</div>

  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatFormFieldModule, MatInputModule]
})
export default class SignalExample3Component {
  name = signal('Mi nombre');

  updateName(name: string) {
    this.name.set(name);
  }
}
