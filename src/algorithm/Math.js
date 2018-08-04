/**
 * Created by onsinsin on 2018/8/4.
 */
import {Util} from '../util/index'
/**
 *
 * @param obj
 * @returns {[*,*]}
 */
function objectPoint2Arr(obj){
  if(Util.isObject(obj)){
    return [obj.x,obj.y];
  }else if(Util.isArray(obj)){
    return obj;
  }else{
    return null;
  }
}
export default {
  /**
   * 两点求距离
   * @param pt1
   * @param pt2
   */
  distance(pt1,pt2){
    let point1=objectPoint2Arr(pt1),
      point2=objectPoint2Arr(pt2);
    var xx=Math.pow((point1[0]-point2[0]),2);
    var yy=Math.pow((point1[1]-point2[1]),2);
    return Math.sqrt(xx+yy);
  },
  /**
   * 计算方向角，x正方向(正东)为0度，逆时针
   * @param pt1
   * @param pt2
   * @returns {number}
   */
  directionAngle(pt1,pt2){
    let point1=objectPoint2Arr(pt1),
      point2=objectPoint2Arr(pt2);
    let rad=Math.atan((point2[1]-point1[1])/(point2[0]-point1[0]));
    if(point1[0]>point2[0]){
      if(point1[1]>point2[1]){
        rad+=Math.PI;
      }else{
        rad+=Math.PI;
      }
    }else{
      if(point1[1]>point2[1]){
        rad+=2*Math.PI;
      }else{
        rad=rad;
      }
    }
    return rad;
  },
  /**
   * 计算三点间的夹角，逆时针
   * @param pt1
   * @param pt2
   * @param pt3
   */
  intersectionAngle(pt1,pt2,pt3){
    let point1,point2,point3;
    if(Util.isArray(pt1[0])||Util.isObject(pt1[0])){
      point1=objectPoint2Arr(pt1[0]);
      point2=objectPoint2Arr(pt1[1]);
      point3=objectPoint2Arr(pt1[2]);
    }else{
      point1=objectPoint2Arr(pt1);
      point2=objectPoint2Arr(pt2);
      point3=objectPoint2Arr(pt3);
    }
    let rad21=this.directionAngle(point2,point1);
    let rad23=this.directionAngle(point2,point3);
    let radVal=rad23-rad21;
    if(radVal<0){
      radVal+=Math.PI*2;
    }
    return radVal;
  }
}