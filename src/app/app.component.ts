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
   playerOne: boolean;

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
        this.load.image("circle", "assets/circle.png");
        this.load.image("x", "assets/X.png");
        //this.load.image('logo', 'assets/sprites/phaser3-logo.png');
        //this.load.image('red', 'assets/particles/red.png');
      },
      create: function () {
        var backgroundSprite = this.add.image(680, 300, 'background');
        var amarillo = this.add.image(228,105,"amarillo").setInteractive();
        var amarillo2 = this.add.image(690,105,"amarillo");
        var amarillo3 = this.add.image(1150,105,"amarillo");
        var amarillo4 = this.add.image(228,320,"amarillo");
        var amarillo5 = this.add.image(690,320,"amarillo");
        var amarillo6 = this.add.image(1150,320,"amarillo");
        var amarillo7 = this.add.image(228,535,"amarillo");
        var amarillo8 = this.add.image(690,535,"amarillo");
        var amarillo9 = this.add.image(1150,535,"amarillo");

        console.log(amarillo2);
        console.log(backgroundSprite);
        backgroundSprite.displayWidth = window.innerWidth;
        backgroundSprite.displayHeight = window.innerHeight;

        amarillo.displayWidth = Math.round(window.innerWidth / 3);
        amarillo.displayHeight = Math.round(window.innerHeight / 3);
        
        amarillo2.displayWidth = Math.round(window.innerWidth / 3);
        amarillo2.displayHeight = Math.round(window.innerHeight / 3);
        amarillo2.setInteractive();
        amarillo3.displayWidth = Math.round(window.innerWidth / 3);
        amarillo3.displayHeight = Math.round(window.innerHeight / 3);
        amarillo3.setInteractive();
        amarillo4.displayWidth = Math.round(window.innerWidth / 3);
        amarillo4.displayHeight = Math.round(window.innerHeight / 3);
        amarillo4.setInteractive();
        amarillo5.displayWidth = Math.round(window.innerWidth / 3);
        amarillo5.displayHeight = Math.round(window.innerHeight / 3);
        amarillo5.setInteractive();
        amarillo6.displayWidth = Math.round(window.innerWidth / 3);
        amarillo6.displayHeight = Math.round(window.innerHeight / 3);
        amarillo6.setInteractive();
        amarillo7.displayWidth = Math.round(window.innerWidth / 3);
        amarillo7.displayHeight = Math.round(window.innerHeight / 3);
        amarillo7.setInteractive();
        amarillo8.displayWidth = Math.round(window.innerWidth / 3);
        amarillo8.displayHeight = Math.round(window.innerHeight / 3);
        amarillo8.setInteractive();
        amarillo9.displayWidth = Math.round(window.innerWidth / 3);
        amarillo9.displayHeight = Math.round(window.innerHeight / 3);
        amarillo9.setInteractive();

        amarillo.on("clicked",()=> {
          console.log("funciona carajo");
          this.add.image(amarillo.x,amarillo.y,"x");
        });
        this.input.on("gameobjectdown",(pointer,gameObject)=> {
          gameObject.emit("clicked");
        });

      },
      update: function(){
       
          
       

      }
    }
  };

  /**
   * Instantiate application component.
   */
  public constructor() { 
    
  }

  /**
   * Game ready event handler.
   *
   * @param game Game instance.
   */
  public onGameReady(game: Phaser.Game): void {
    console.log(game);
    this.playerOne = true;
    this.game = game;
  }

}
