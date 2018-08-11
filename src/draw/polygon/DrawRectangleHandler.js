/**
 * Created by onsinsin on 2018/8/11.
 */
import DrawHandler from '../DrawHandler'
let DrawRectangleHandler=DrawHandler.extend({
  includes: L.Mixin.Events,
  initialize:function(map,options){
    DrawHandler.prototype.initialize.call(this,map,options);
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

  _onMouseUp:function (event) {

  },
  _onMouseMove:function (event) {

  }
});
export default DrawRectangleHandler;