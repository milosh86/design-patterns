import Glyph from './Glyph.js';

class Row {
  constructor(compositor) {
    this._children = [];
    this._compositor = compositor;

  }
  
  draw(win) {
    Glyph.draw(); // some default behavior
    console.log('Drawing Row'); // some row specific drawing
    this._children.forEach(c => c.draw(win)); // draw children
  }
  
  intersects(point) {
    let [p1, p2] = this.bounds();
    
    if (
      point.x >= p1.x &&
      point.x <= p2.x &&
      point.y <= p1.y &&
      point.y >= p2.y
       ) {
      return true;
      }
      
    return false;
  }
  
  bounds() {
    // calculate composite component boundary based on children
    let p1 = {x: 0, y: 0};
    let p2 = {x: 0, y: 0};
    
    return [p1, p2];
  }
  
  updateLocation(location) {
    this._p1 = location.p1;
    this._p2 = location.p2;
  }
  
  insert(glyph, index) {
    this._children.push(glyph);
    glyph.parent = this;
  }
}
  
export default {
  create(p1, p2) {
    return new Row(p1, p2);
  }
};