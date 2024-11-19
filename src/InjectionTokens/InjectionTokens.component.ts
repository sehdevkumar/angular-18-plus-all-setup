import {
  Component,
  inject,
  Injectable,
  InjectionToken,
  OnInit,
} from '@angular/core';

/**
 * This service will log any message to the console.
 */
@Injectable({
  providedIn: 'any',
})
export class LogService {
  /**
   * Logs a message to the console.
   * @param message the message to log
   */
  log(message: string) {
    console.log(message);
  }
}

/**
 * This service will log any message to the console and also has a random number.
 */
@Injectable({
  providedIn: 'any',
})
export class HeroService {
  /**
   * A random number.
   */
  random = Math.random();

  /**
   * Logs a message to the console.
   * @param message the message to log
   */
  log(message: string) {
    console.log(message);
  }
}

/** A token for the hero. */
const token = new InjectionToken<{ name: string; color: string }>('Hero');

/** A boolean that is randomly true or false. */
const isLoggedIn = Math.random() > 0.5;
/**
 * @fileoverview
 * This file defines the `InjectionTokensComponent` which demonstrates the use of Angular's dependency injection system with injection tokens.
 * 
 * - Two services are defined: `LogService` and `HeroService`. Both services provide a `log` method to log messages to the console.
 * - `HeroService` also includes a `random` property that holds a random number.
 * 
 * - An `InjectionToken` named `token` is created to provide a mechanism for injecting a hero object containing a `name` and `color`.
 * - A boolean `isLoggedIn` is randomly determined to simulate a user's login status.
 * 
 * - The `InjectionTokensComponent` is decorated with providers:
 *   - `LogService` is provided by using the existing `HeroService`, meaning `HeroService` will be used wherever `LogService` is injected.
 *   - The `token` is provided by a factory function that returns a hero object based on the `isLoggedIn` status:
 *     - If `isLoggedIn` is true, it provides a hero object with `name: 'Superman'` and `color: 'red'`.
 *     - Otherwise, it provides a hero object with `name: 'Batman'` and `color: 'black'`.
 * 
 * This component showcases how Angular's dependency injection can be customized using tokens and conditionally providing different values or services.
 */
@Component({
  selector: 'app-InjectionTokens',
  templateUrl: './InjectionTokens.component.html',
  styleUrls: ['./InjectionTokens.component.css'],
  standalone: true,
  providers: [
    {
      provide: LogService,
      useExisting: HeroService,
    },
    {
      provide: token,
      useFactory: () => {
        if (isLoggedIn) {
          return { name: 'Superman', color: 'red' };
        } else {
          return { name: 'Batman', color: 'black' };
        }
      },
    },
  ],
})
export class InjectionTokensComponent implements OnInit {
  /**
   * The log service.
   */
  ls = inject(LogService);

  /**
   * The hero service.
   */
  hs = inject(HeroService);

  /**
   * The hero token.
   */
  tn = inject(token);

  constructor() {}

  /**
   * Logs a message to the console.
   */
  ngOnInit() {
    console.log(this.ls === this.hs);

    console.log((this.ls as any).random, this.hs.random);

    console.log(this.tn);
  }
}

