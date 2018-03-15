import Phaser from 'phaser';
import image from './../../assets/images/logo.png';
import audioMP3 from './../../assets/audio/medieval_music.mp3';
import audioOGG from './../../assets/audio/medieval_music.ogg';

class BootScene extends Phaser.Scene {
  constructor() {
    super({ key: 'Boot' });
  }

  preload() {
    // Load all images sounds sprite.
    this.load.image('logo', image);
  }

  create() {
    this.add.text(10, 10, 'Phaser 3 Advanced webpack boilerplate');
    this.add.image(300, 300, 'logo');
  }
}

export default BootScene;
