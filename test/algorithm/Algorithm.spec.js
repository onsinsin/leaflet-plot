/**
 * Created by onsinsin on 2018/7/26.
 */
import chai from 'chai';
const expect = chai.expect;    // Using Expect style
//
const Mock = require('mockjs')
//
import Algorithm from '../../src/algorithm/Algorithm';

describe('Algorithm',function () {
  let instance=null;
  beforeEach(function(done){
    instance=new Algorithm({
      precision:2
    });
    done();
  });
  afterEach(function(done){
    instance=null;
    done();
  })
  //
  describe('#constructor',function(){
    it('shuold set opts when created',function(done){
      expect(instance.opts.precision).to.equal(2);
      done();
    })
  })
  //
  describe('#addControlPoint',function(){
    it('should work when point is object',function(done){
      expect(function(){
        instance.addControlPoint({
          x:1,
          y:1
        });
      }).to.not.throw();
      expect(instance.getControlPointCount()).to.equal(1);
      done();
    });
    it('should work when point is array',function(done){
      expect(function(){
        instance.addControlPoint([
          {
            x:1,
            y:1
          },
          {
            x:1,
            y:1
          }
          ]);
      }).to.not.throw();
      expect(instance.getControlPointCount()).to.equal(2);
      done();
    });
    it('should throw error when point is undefined',function(done){
      expect(function(){
        instance.addControlPoint();
      }).to.throw();
      done();
    });
    it('should throw error when point is null',function(done){
      expect(function(){
        instance.addControlPoint(null);
      }).to.throw();
      done();
    });
    it('should throw error when point x or y is NaN ',function(done){
      expect(function(){
        instance.addControlPoint({
          x:'fss',
          y:1
        });
      }).to.throw();
      done();
    });
    it('should throw error when point without x',function(done){
      expect(function(){
        instance.addControlPoint({
          y:1
        });
      }).to.throw();
      done();
    });
    it('should throw error when point without y',function(done){
      expect(function(){
        instance.addControlPoint({
          x:1
        });
      }).to.throw();
      done();
    });
  });
  //
  describe('#updateControlPoint',function(){
    it('should work',function (done) {
      expect(function(){
        instance.addControlPoint([
          {
            x:1,
            y:2
          },
          {
            x:3,
            y:4
          }
        ]);
        instance.updateControlPoint(1,{
          x:5,
          y:6
        })
      }).to.not.throw();
      let ctrlPoint=instance.getControlPoints()[1];
      expect(ctrlPoint.x).to.equal(5);
      expect(ctrlPoint.y).to.equal(6);
      done();
    });
    it('should throw error when index is illegal',function (done) {
      expect(function(){
        instance.addControlPoint([
          {
            x:1,
            y:2
          },
          {
            x:3,
            y:4
          }
        ]);
        instance.updateControlPoint(2,{
          x:5,
          y:6
        })
      }).to.throw();
      done();
    });
  })
  //
  describe('#removeControlPoint',function(){
    it('should work',function (done) {
      expect(function(){
        instance.addControlPoint([
          {
            x:1,
            y:2
          },
          {
            x:3,
            y:4
          }
        ]);
        instance.removeControlPoint(1)
      }).to.not.throw();
      expect(instance.getControlPointCount()).to.equal(1);
      done();
    });
    it('should throw error when index is illegal',function (done) {
      expect(function(){
        instance.addControlPoint([
          {
            x:1,
            y:2
          },
          {
            x:3,
            y:4
          }
        ]);
        instance.updateControlPoint(2)
      }).to.throw();
      done();
    });
  })
});