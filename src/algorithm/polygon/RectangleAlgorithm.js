/**
 * Created by onsinsin on 2018/8/4.
 * 矩形
 */
import BaseAlgorithm from '../Algorithm';
import {Util} from '../../util/index';
import AlgorithmUtil from '../AlgorithmUtil';
import PlotMath from '../Math';
/**
 * Rectangle Algorithm
 */
export default class RectangleAlgorithm extends BaseAlgorithm {
  constructor() {
    super();
    //three control points on Rectangle
    this.controlPointLimit = 3;
  }

  /**
   * validate control points before build or rotate or scale
   */
  validateControlPoints() {
    BaseAlgorithm.prototype.validateControlPoints.call(this);
    //check duplicate
    AlgorithmUtil.checkDuplicateControlPoint(this.getControlPoints());
    //check intersection angle should be 90°
    let intersectionAngle = PlotMath.intersectionAngle(this.getControlPoints()) * 180 / Math.PI;
    if (!Util.approximate(intersectionAngle , 90) && !Util.approximate(intersectionAngle , 270)) {
      throw(new Error('control points should have intersection angle to be 90°'))
    }
  }

  /**
   * build rectangle geometry
   */
  build() {
    this.validateControlPoints();
    //
    let coordinates=[];
    for(let i=0,len=this.controlPoints.length;i<len;i++){
      let controlPoint=this.controlPoints[i];
      coordinates.push([controlPoint.x,controlPoint.y]);
    }
    let lastPt=this._caculateLastPt();
    coordinates.push([lastPt.x,lastPt.y]);
    let geometry= {
      type:'Polygon',
      coordinates:coordinates
    }
    return [geometry];
  }

  /**
   * caculate the forth vertex of Rectangle
   * @private
   */
  _caculateLastPt() {
    let lastPt={};
    let ctrlPoints = this.getControlPoints(),
      ptA = ctrlPoints[0],
      ptB = ctrlPoints[1],
      ptC = ctrlPoints[2];
    let lenBC=PlotMath.distance(ptB,ptC);
    let angleBc=PlotMath.directionAngle(ptB,ptC);
    lastPt.x=ptA.x+Math.cos(angleBc)*lenBC;
    lastPt.y=ptA.y+Math.sin(angleBc)*lenBC;
    return lastPt;
  }

}