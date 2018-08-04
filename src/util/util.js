/**
 *
 * @type {{}}
 */
import lodash from 'lodash'
export default {
  /**
   * 随机数 32位
   * @returns {*}
   */
  uuid(){
    let g = function () {
      return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }
    return (g() + g()  + g()  + g()  + g()  + g() + g() + g());
  },
  /**
   *
   * @param obj
   */
  isArray(obj){
    return Object.prototype.toString.call(obj)==='[object Array]';
  },
  /**
   *
   * @param obj
   * @returns {*}
   */
  isObject(obj){
    return Object.prototype.toString.call(obj)==='[object Object]';
  },
  /**
   *
   * @param obj
   * @returns {*}
   */
  isFunction(obj){
    return Object.prototype.toString.call(obj)==='[object Function]';
  },
  /**
   *
   * @param val
   * @param precision
   * @returns {Number}
   */
  toFixed(val,precision){
    return parseFloat(parseFloat(val).toFixed(precision));
  },
  /**
   * 深度复制
   * @param obj
   */
  cloneDeep(obj){
    return lodash.cloneDeep(obj);
  },
  /**
   * 判断a,b是否相等
   * @param a  {Number}
   * @param b {Number}
   * @param precision {Number}  精度
   */
  approximate(a,b,precision=6){
    return Math.abs(a-b)<=Math.pow(10,-1*precision);
  },
  /**
   * extend properties,a will be changed
   * @param a
   * @param b
   * @param c
   */
  merge(a,b,c){
    return lodash.merge.call(a,b,c);
  }
}