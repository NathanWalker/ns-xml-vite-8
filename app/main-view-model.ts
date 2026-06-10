import { Observable } from '@nativescript/core'

export class HelloWorldModel extends Observable {
  private _counter: number
  private _message: string | null = null;

  constructor() {
    super()

    // Initialize default values.
    this._counter = 42
    this.updateMessage()
  }

  get message(): string | null {
    return this._message
  }

  set message(value: string | null) {
    if (this._message !== value) {
      this._message = value
      this.notifyPropertyChange('message', value)
    }
  }

  onTap() {
    this._counter--
    this.updateMessage()
  }

  private updateMessage() {
    if (this._counter <= 0) {
      this.message = 'Hoorraaay! You unlocked the NativeScript clicker achievement!'
    } else {
      this.message = `${this._counter} taps left`
    }
  }
}
