/**
 * Created by onsinsin on 2018/8/11.
 */
let DrawHandler=L.Handler.extend({
  includes: L.Mixin.Events,
  initialize:function(map,options){
    this._map = map;
    L.setOptions(this, options);
  },
  // @method enable(): this
  // Enables the handler
  enable: function () {
    if (this._enabled) { return this; }

    this._enabled = true;
    this.addHooks();
    return this;
  },

  // @method disable(): this
  // Disables the handler
  disable: function () {
    if (!this._enabled) { return this; }

    this._enabled = false;
    this.removeHooks();
    return this;
  },
  
  addHooks:function () {
    this._map
      .on('mouseup', this._onMouseUp, this) // Necessary for 0.7 compatibility
      .on('mousemove', this._onMouseMove, this);
  },
  
  removeHooks:function () {
    this._map
      .off('mouseup', this._onMouseUp, this)
      .off('mousemove', this._onMouseMove, this);
  },
  _onMouseUp:function (event) {

  },
  _onMouseMove:function (event) {

  }
});
export default DrawHandler;