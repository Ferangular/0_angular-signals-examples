import {CurrencyPipe, NgFor, NgIf} from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

interface Product {
  id: number;
  name: string;
  price: number;
}

const PRODUCTS: Product[] = [
  { id: 1, name: 'Product A', price: 10 },
  { id: 2, name: 'Product B', price: 15 },
  { id: 3, name: 'Product C', price: 20 },
];

@Component({
  selector: 'signal-example13',
  standalone: true,
  template:`
  <h2>Example 13 - My Cart(Add/Remove Product)</h2>

<ul>
  @for (product of products(); track product) {

    <li>
      {{product.name}} - {{product.price}}
      @if (selectProductsIds().includes(product.id)) {

          <button mat-raised-button color="warn" (click)="removeFromCart(product)">
            Remove
          </button>
          } @else {
          <button mat-raised-button color="primary" (click)="addToCart(product)">
            Add
          </button>
          }
    </li>
  }

</ul>

      <p>
        Total Price: <b>{{ totalPrice()| currency: 'USD' }}</b>
      </p>

  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatButtonModule, NgFor, NgIf, CurrencyPipe],
  styles: [
    `
      ul {
        li {
          padding: 10px;
        }
      }
    `,
  ],
})
export default class SignalExample13Component {
  // Define a signal for the list of items
  products = signal(PRODUCTS);

  // Define a computed value for the total price
  totalPrice = computed(() => {
    return this.cart().reduce((acc, curr) => acc + curr.price, 0);
  });

  selectProductsIds = computed(() => {
    return this.cart().map((proudct) => proudct.id);
  });

  cart = signal<Product[]>([]);

  removeFromCart(product: Product) {
    this.cart.update((ids) => {
      return ids.filter((i) => i.id !== product.id);
    });
  }

  addToCart(product: Product) {
    this.cart.update((products) => {
      return [...products, product];
    });
  }
}
