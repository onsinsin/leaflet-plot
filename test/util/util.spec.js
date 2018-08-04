/**
 * Created by onsinsin on 2018/8/4.
 */
import chai from 'chai';
const expect = chai.expect;    // Using Expect style
//
import Util from '../../src/util/util';
describe('Util',function () {
  describe('#uuid',function(done){
    it('should get str length of 32',function(done){
      expect(Util.uuid().length).to.equal(32);
      done();
    });
    it('should be different value each time called',function(done){
      let set={};
      for(let i=0;i<100;i++){
        set[Util.uuid()]=true;
      }
      expect(Object.keys(set).length).to.equal(100);
      done();
    });
  });
  describe('#approximate',function(done){
    it('should return true',function(done){
      expect(Util.approximate(1.00002,1,2)).to.be.true;
      done();
    });
  });
});