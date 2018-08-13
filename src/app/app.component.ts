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
  public playerOne: boolean;

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
          if(AppComponent.prototype.playerOne){
              this.add.image(amarillo.x,amarillo.y,"circle");
              AppComponent.prototype.playerOne = !AppComponent.prototype.playerOne;
              amarillo.input.enabled = false;
          }else{
              this.add.image(amarillo.x,amarillo.y,"x");
              AppComponent.prototype.playerOne = !AppComponent.prototype.playerOne;
              amarillo.input.enabled = false;
          }
        });

        amarillo2.on("clicked",()=> {
          if(AppComponent.prototype.playerOne){
              this.add.image(amarillo2.x,amarillo2.y,"circle");
              AppComponent.prototype.playerOne = !AppComponent.prototype.playerOne;
              amarillo2.input.enabled = false;
          }else{
              this.add.image(amarillo2.x,amarillo2.y,"x");
              AppComponent.prototype.playerOne = !AppComponent.prototype.playerOne;
              amarillo2.input.enabled = false;
          }
        });

        amarillo3.on("clicked",()=> {
          if(AppComponent.prototype.playerOne){
              this.add.image(amarillo3.x,amarillo3.y,"circle");
              AppComponent.prototype.playerOne = !AppComponent.prototype.playerOne;
              amarillo3.input.enabled = false;
          }else{
              this.add.image(amarillo3.x,amarillo.y,"x");
              AppComponent.prototype.playerOne = !AppComponent.prototype.playerOne;
              amarillo3.input.enabled = false;
          }
        });

        amarillo4.on("clicked",()=> {
          if(AppComponent.prototype.playerOne){
              this.add.image(amarillo4.x,amarillo4.y,"circle");
              AppComponent.prototype.playerOne = !AppComponent.prototype.playerOne;
              amarillo4.input.enabled = false;
          }else{
              this.add.image(amarillo4.x,amarillo4.y,"x");
              AppComponent.prototype.playerOne = !AppComponent.prototype.playerOne;
              amarillo4.input.enabled = false;
          }
        });

        amarillo5.on("clicked",()=> {
          if(AppComponent.prototype.playerOne){
              this.add.image(amarillo5.x,amarillo5.y,"circle");
              AppComponent.prototype.playerOne = !AppComponent.prototype.playerOne;
              amarillo5.input.enabled = false;
          }else{
              this.add.image(amarillo5.x,amarillo5.y,"x");
              AppComponent.prototype.playerOne = !AppComponent.prototype.playerOne;
              amarillo5.input.enabled = false;
          }
        });

        amarillo6.on("clicked",()=> {
          if(AppComponent.prototype.playerOne){
              this.add.image(amarillo6.x,amarillo6.y,"circle");
              AppComponent.prototype.playerOne = !AppComponent.prototype.playerOne;
              amarillo6.input.enabled = false;
          }else{
              this.add.image(amarillo6.x,amarillo6.y,"x");
              AppComponent.prototype.playerOne = !AppComponent.prototype.playerOne;
              amarillo6.input.enabled = false;
          }
        });

        amarillo7.on("clicked",()=> {
          if(AppComponent.prototype.playerOne){
              this.add.image(amarillo7.x,amarillo7.y,"circle");
              AppComponent.prototype.playerOne = !AppComponent.prototype.playerOne;
              amarillo7.input.enabled = false;
          }else{
              this.add.image(amarillo7.x,amarillo7.y,"x");
              AppComponent.prototype.playerOne = !AppComponent.prototype.playerOne;
              amarillo7.input.enabled = false;
          }
        });

        amarillo8.on("clicked",()=> {
          if(AppComponent.prototype.playerOne){
              this.add.image(amarillo8.x,amarillo8.y,"circle");
              AppComponent.prototype.playerOne = !AppComponent.prototype.playerOne;
              amarillo8.input.enabled = false;
          }else{
              this.add.image(amarillo8.x,amarillo8.y,"x");
              AppComponent.prototype.playerOne = !AppComponent.prototype.playerOne;
              amarillo8.input.enabled = false;
          }
        });

        amarillo9.on("clicked",()=> {
          if(AppComponent.prototype.playerOne){
              this.add.image(amarillo9.x,amarillo9.y,"circle");
              AppComponent.prototype.playerOne = !AppComponent.prototype.playerOne;
              amarillo9.input.enabled = false;
          }else{
              this.add.image(amarillo9.x,amarillo9.y,"x");
              AppComponent.prototype.playerOne = !AppComponent.prototype.playerOne;
              amarillo9.input.enabled = false;
          }
        });

        this.input.on("gameobjectdown",(pointer,gameObject)=> {
          gameObject.emit("clicked");
        });

      }
    }
  };

  /**
   * Instantiate application component.
   */
  public constructor() { 
    //this.playerOne = true;
  }

  /**
   * Game ready event handler.
   *
   * @param game Game instance.
   */
  public onGameReady(game: Phaser.Game): void {
    AppComponent.prototype.playerOne = true;
    console.log("adasda");
    console.log(AppComponent.prototype.playerOne);
    this.game = game;
  }

}
