/**
 * Created by onsinsin on 2018/8/4.
 */
import chai from 'chai';
const expect = chai.expect;    // Using Expect style

import PlotMath from '../../src/algorithm/Math';

describe('Math', function () {
  describe('#directionAngle', function () {
    it('should return 90 in angle', function (done) {
      let angle = PlotMath.directionAngle([0, 1], [0, 2]) * 180 / Math.PI;
      expect(angle).to.equal(90);
      done();
    })
    it('should return 45 in angle', function (done) {
      let angle = PlotMath.directionAngle([0, 0], [2, 2]) * 180 / Math.PI;
      expect(angle).to.equal(45);
      let angle1 = PlotMath.directionAngle({
          x: 0,
          y: 0
        }, {
          x: 2,
          y: 2
        }) * 180 / Math.PI;
      expect(angle1).to.equal(45);
      done();
    })
  })
  describe('#intersectionAngle', function () {
    it('should return 90 in angle', function (done) {
      let angle = PlotMath.intersectionAngle([1, 0], [0, 0], [0, 1]) * 180 / Math.PI;
      expect(angle).to.equal(90);
      done();
    })
  })
});