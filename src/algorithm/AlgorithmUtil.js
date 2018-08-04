/**
 * Created by onsinsin on 2018/8/4.
 */
import {Util} from '../util/index';
//tool functions for algorithms
export default {
  /**
   * check if point is validate
   * @param point
   * @private
   */
  checkControlPoint(point){
    return Util.isObject(point)&&
      !isNaN(point.x)&&
      !isNaN(point.y);
  },
  /**
   * check if new control point should be added
   * @param addCount
   * @private
   */
  checkAddControlPoint(algorithm,addCount){
    addCount=addCount||0;
    return (algorithm.getControlPointCount()+addCount)<=algorithm.getControlPointLimit()[1];
  },
  /**
   * check if control point count meets the limit
   * @param algorithm
   */
  checkControlPointLimit(algorithm){
    let count=algorithm.getControlPointCount(),
      limit=algorithm.getControlPointLimit();
    return count>=limit[0]&&count<=limit[1];
  },
  /**
   * check if exists duplicate control point
   * @param controlPoints
   */
  checkDuplicateControlPoint(controlPoints){
    let set={};
    for(let i=0,len=controlPoints.length;i<len;i++){
      let ctrlPoint=controlPoints[i];
      let key=ctrlPoint.x+','+ctrlPoint.y;
      if(set.hasOwnProperty(key)){
        throw (new Error('duplicate control point exists'));
      }
      set[key]=true;
    }
  }
}