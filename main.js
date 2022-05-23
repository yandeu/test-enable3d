import { Project, Scene3D, PhysicsLoader } from 'enable3d'

class MainScene extends Scene3D {
  constructor() {
    super('MainScene')
  }

  create() {
    this.warpSpeed()
    this.box = this.add.box({ y: 2 }, { lambert: { color: 'deepskyblue' } })
  }

  update() {
    this.box.rotation.x += 0.01
    this.box.rotation.y += 0.01
  }
}

new Project({ scenes: [MainScene] })
