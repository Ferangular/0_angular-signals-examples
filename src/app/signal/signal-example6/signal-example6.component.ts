import { ChangeDetectionStrategy, Component, WritableSignal, model, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-signal-example6',
  standalone: true,
  template:`

  <h2>Example 6 - input with ngModel</h2>
<div>
  <p>User Name - {{ username() }}</p>
  <mat-form-field>
    <mat-label>User Name</mat-label>
    <input matInput [(ngModel)]="username">
  </mat-form-field>
</div>
  `,
  imports: [FormsModule, MatFormFieldModule, MatInputModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class SignalExample5Component {
  username = model('Pepe pelito');

  // updateUsername(name: string) {
  //   this.username.set(name);
  // }
}
