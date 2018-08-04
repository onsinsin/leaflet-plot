/**
 * plot algorithm
 */
import {Util} from '../util/index';
import AlgorithmUtil from './AlgorithmUtil';
/**
 * parent class for all Algorithm classes
 */
export default class Algorithm {
  constructor(opts) {
    let options={
      //precison of coordinate
      precision:6
    };
    this.opts=Util.merge(options,opts||{});
    //control point count limit,
    // integer value means control point count must equal that value
    // Array[integer,integer] value means the min and max count of control points
    this.controlPointLimit = [1,4];
    //control point array
    this.controlPoints = [];
  }

  /**
   * add control point
   * @param point { Object | Array }
   */
  addControlPoint(point) {
    if (Util.isArray(point)) {
      if (AlgorithmUtil.checkAddControlPoint(this, point.length)) {
        for (let i = 0, len = point.length; i < len; i++) {
          this._addControlPoint(point[i]);
        }
      } else {
        throw(new Error('control point count exceed'))
      }
    } else if (Util.isObject(point)) {
      if (AlgorithmUtil.checkAddControlPoint(this, 1)) {
        this._addControlPoint(point);
      } else {
        throw(new Error('control point count exceed'))
      }
    } else {
      throw(new Error('illegal param point'))
    }
  }

  /**
   *
   * @param point
   */
  _addControlPoint(point) {
    if (AlgorithmUtil.checkControlPoint(point)) {
      point.deletable=this.isControlPointDeletable(this.getControlPointCount());
      point.x=Util.toFixed(point.x,this.opts.precision);
      point.y=Util.toFixed(point.y,this.opts.precision);
      this.controlPoints.push(point);
    } else {
      throw(new Error('illegal param point:' + JSON.stringify(point)))
    }
  }

  /**
   * update control point
   * @param index {Number}
   * @param point {Object}
   */
  updateControlPoint(index, point) {
    if(!(index>=0&&index<this.getControlPointCount())){
      throw(new Error('index out of range'));
    }
    if(!AlgorithmUtil.checkControlPoint(point)){
      throw(new Error('illegal control point'));
    }
    let ctrlPoint=this.controlPoints[index];
    ctrlPoint.x=Util.toFixed(point.x,this.opts.precision);
    ctrlPoint.y=Util.toFixed(point.y,this.opts.precision);
    return true;
  }

  /**
   * remove control point
   * @param index {Number}
   */
  removeControlPoint(index) {
    if(!(index>=0&&index<this.getControlPointCount())){
      throw(new Error('index out of range'));
    }
    let ctrlPoint=this.controlPoints[index];
    this.controlPoints.splice(index,1);
    for(let i=index;i<this.getControlPointCount();i++){
      let ctrlPoint=this.controlPoints[i];
      ctrlPoint.deletable=this.isControlPointDeletable(i);
    }
    return ctrlPoint;
  }

  /**
   * get control point count
   * @returns {Number}
   */
  getControlPointCount() {
    return this.controlPoints.length;
  }

  /**
   * get control point limit
   */
  getControlPointLimit() {
    if (Util.isArray(this.controlPointLimit)) {
      return this.controlPointLimit;
    } else {
      return new Array(2).fill(this.controlPointLimit);
    }
  }

  /**
   * get array of control points
   * @returns {Array}
   */
  getControlPoints() {
    return this.controlPoints;
  }

  /**
   * validate control points before build or rotate or scale
   */
  validateControlPoints(){
    if(!AlgorithmUtil.checkControlPointLimit(this)){
      throw(new Error('control point count illegal'));
    }
  }

  /**
   * tell where the control point can be deleted
   * in most cases shoud be false , sometimes true for PolygonAlgorithm etc.
   * @param index {Number} index of control point to tell
   */
  isControlPointDeletable(index){
    return false;
  }

  /**
   * build geometries
   * @return Array
   */
  build() {}

  /**
   * caculate center point
   * @returns Array[x,y]
   */
  caculateCenter() {}

  /**
   * rotate control points by angle
   * @param angle
   */
  rotate(angle){}

  /**
   *  scale control points on certain scale
   * @param scale
   */
  scale(scale){}

}