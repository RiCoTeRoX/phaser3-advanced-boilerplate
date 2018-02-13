import Phaser from 'Phaser';

class BootScene extends Phaser.Scene {
  constructor() {
    super({ key: 'Boot' });
  }

  preload() {
    // Load all images sounds sprite.
  }

  create() {
    this.add.text(10, 10, 'Phaser 3 Advanced webpack boilerplate');
  }
}

export default BootScene;
