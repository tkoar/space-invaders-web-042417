class Spaceship {

  constructor (name, crew, phasers, shields, cloaked, warpDrive, docked, phasersCharge) {
    this.name = name
    this.crew = crew
    this.phasers = phasers
    this.shields = shields
    this.cloaked = false
    this.warpDrive = "disengaged"
    this.phasersCharge = 'uncharged'

    if (this.crew.length > 0) {
      this.docked = false
    } else {
      this.docked = true
    }

    this.addCrew()

  }

  addCrew() {
    this.crew.forEach(member => {
      member.currentShip = this
    })
  }



}
