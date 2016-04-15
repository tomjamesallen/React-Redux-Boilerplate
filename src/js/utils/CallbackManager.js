export default function CallbackManager() {
  return {
    _refs: {},
    _callbackFired: false,
    reset() {
      this._refs = {}
      this._callbackFired = false
    },
    register(ref) {
      if (typeof this._refs[ref] === 'undefined') {
        this._refs[ref] = false
      }
    },
    complete(ref, callback) {
      this._refs[ref] = true
      const refs = Object.keys(this._refs)
      let allLoaded = true
      refs.forEach((ref) => {
        const refComplete = this._refs[ref]
        if (!refComplete) {
          allLoaded = false
        }
      })
      if (allLoaded && !this._callbackFired) {
        callback(this._refs)
        this._callbackFired = true
      }
    }
  }
}
