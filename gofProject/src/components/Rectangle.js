import Glyph from './Glyph.js';

class Rectangle {
  constructor(p1, p2) {
    // upper left
    this._p1 = p1;
    
    // bottom right
    this._p2 = p2;
    this._parent = null;
  }
  
  draw(win) {
    Glyph.draw();
    win.drawRectangle(this._p1, this._p2);
  }
  
  intersects(point) {
    if (
      point.x >= this._p1.x &&
      point.x <= this._p2.x &&
      point.y <= this._p1.y &&
      point.y >= this._p2.y
       ) {
      return true;
      }
      
    return false;
  }
  
  bounds() {
    return [this._p1, this._p2];
  }
  
  updateLocation(location) {
    this._p1 = location.p1;
    this._p2 = location.p2;
  }
}
  
export default {
  create(p1, p2) {
    return new Rectangle(p1, p2);
  }
};