import { Component } from '@angular/core';

import { environment } from '../environments/environment';

/**
 * Application component.
 */
@Component({
  selector: 'app-root',
  //template: `<phaser-component [gameConfig]="gameConfig" (gameReady)="onGameReady($event)"></phaser-component>`
  templateUrl:'./app.component.html'
})
export class AppComponent {
  /**
   * Game instance.
   */
  public game: Phaser.Game;

  /**
   * Game configuration.
   */
  public readonly gameConfig: GameConfig = {
    title: environment.title,
    version: environment.version,
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
    scene: {
      preload: function () {
        //this.load.setBaseURL('http://labs.phaser.io');
        this.load.image('background', 'assets/bluebackground.png');
        this.load.image("amarillo", "assets/amarillo.png");
        //this.load.image('logo', 'assets/sprites/phaser3-logo.png');
        //this.load.image('red', 'assets/particles/red.png');
      },
      create: function () {
        var backgroundSprite = this.add.image(680, 300, 'background');
        var amarillo = this.add.image(228,105,"amarillo");
        var amarillo2 = this.add.image(230,105,"amarillo");
        console.log(backgroundSprite);
        backgroundSprite.displayWidth = window.innerWidth;
        backgroundSprite.displayHeight = window.innerHeight;

        amarillo.displayWidth = Math.round(window.innerWidth / 3);
        amarillo.displayHeight = Math.round(window.innerHeight / 3);
        amarillo2.displayWidth = Math.round(window.innerWidth / 3);
        amarillo2.displayHeight = Math.round(window.innerHeight / 3);
      }
    }
  };

  /**
   * Instantiate application component.
   */
  public constructor() { }

  /**
   * Game ready event handler.
   *
   * @param game Game instance.
   */
  public onGameReady(game: Phaser.Game): void {
    console.log(game);
    this.game = game;
  }

}
