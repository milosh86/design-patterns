// Component participant from Composite pattern
export default {

  /**
   * Each Glyph type should implement its own drawing logic
   */
  draw(win) {
    console.log('Glyph draw ...');
  },

  /**
   * Returns true if point intersects with Glyph
   */
  intersects(point) {
    console.log('Glyph intersects ...');
  },

  /**
   * Composite components implement this method for inserting children Glyphs
   */
  insert(glyph, position) {
    console.log('Glyph insert ...');
  }
};