/**
 * Created by onsinsin on 2018/8/4.
 */
import chai from 'chai';
const expect = chai.expect;    // Using Expect style

import RectangleAlgorithm from '../../../src/algorithm/polygon/RectangleAlgorithm';
let instance=null;
describe('RectangleAlgorithm',function(){
  beforeEach(function(done){
    instance=new RectangleAlgorithm();
    done();
  });
  afterEach(function (done) {
    instance=null;
    done();
  })
  describe('#_caculateLastPt',function(){
    it('should return {x:1,y:2}',function (done) {
      expect(function(){
        instance.addControlPoint([
          {
            x:0,
            y:1
          },{
            x:1,
            y:0
          },{
            x:2,
            y:1
          }
        ]);
        instance.validateControlPoints();
      }).to.not.throw();
      let pt=instance._caculateLastPt();
      expect(pt.x-1).to.be.below(0.00001);
      expect(pt.y-2).to.be.below(0.00001);
      done();
    })
    it('should return {x:2,y:3}',function (done) {
      expect(function(){
        instance.addControlPoint([
          {
            x:0,
            y:1
          },{
            x:1,
            y:0
          },{
            x:3,
            y:2
          }
        ]);
        instance.validateControlPoints();
      }).to.not.throw();
      let pt=instance._caculateLastPt();
      expect(pt.x-2).to.be.below(0.00001);
      expect(pt.y-3).to.be.below(0.00001);
      done();
    })
  })
});