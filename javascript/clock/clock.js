//
// This is only a SKELETON file for the 'Clock' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Clock {
  constructor(hour = 0, minute = 0) {
    this.hour = hour;
    this.minute = minute;
    this.overflow();
  }

  toString() {
    return `${this.hour.toString().padStart(2, "0")}:${this.minute.toString().padStart(2, "0")}`
  }

  plus(time) {
    const addHours = Math.floor(time / 60);
    const addMinutes = time % 60;

    this.hour = this.hour + addHours;
    this.minute = this.minute + addMinutes;
    this.overflow();
    return this;
  }

  minus(time) {
    const subtractHours = Math.floor(time / 60);
    const subtractMinutes = time % 60;

    this.hour = this.hour - subtractHours;
    this.minute = this.minute - subtractMinutes;
    this.overflow();
    return this;
  }

  equals(other) {
    return this.toString() == other.toString();
  }

  overflow() {
    const addHours = Math.floor(this.minute / 60);
    const addMinutes = this.minute % 60;

    this.hour = (this.hour + addHours) % 24;
    this.minute = addMinutes;

    this.hour = this.hour < 0 ? this.hour + 24 : this.hour;
    this.minute = this.minute < 0 ? this.minute + 60 : this.minute;
  }
}
