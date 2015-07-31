// A common way to represent hierarchically structured information is through a technique called recursive composition, 
// which entails building increasingly complex elements out of simpler ones. 
// Recursive composition gives us a way to compose a document out of simple graphical elements.
// Compose objects into tree structures to represent part-whole hierarchies. 
// Composite lets clients treat individual objects and compositions of objects uniformly.

/**
 * Component (Graphic, Glyph) - from GoF:
 *   o declares the interface for objects in the composition.
 *   o implements default behavior for the interface common to all classes, as appropriate.
 *   o declares an interface for accessing and managing its child components.
 *   o (optional) defines an interface for accessing a component's parent in the recursive structure, and implements it if that's appropriate.
 *
 * In JS it's only used for storing default implementations. Typescript could be used for static type checking.
 */
var Component = {
  draw: function () {
    console.log('Default draw implementation');
  }
};

/**
 * Leaf (Rectangle, Line, Text, etc.)
 *   o represents leaf objects in the composition. A leaf has no children.
 *   o defines behavior for primitive objects in the composition.
 *   o implements Component interface.
 */
function Leaf(name) {
  this.name = name;
}

Leaf.prototype.draw = function () {
  console.log("Leaf's implementation of draw operation");
  
  // reuse some default implementation
  Component.draw();
};

/**
 * Composite (Picture, Column, Row, etc.)
 *   o defines behavior for components having children.
 *   o stores child components (Leafs or Composites).
 *   o implements child-related operations in the Component interface.
 *   o implements Component interface.
 */
function Composite(children) {
  this._children = children || [];
}

Composite.prototype.draw = function () {
  console.log("Composite's implementation of draw operation");
  this._children.forEach(function (child) {
    child.draw();
  });
};

Composite.prototype.add = function (child) {
  child && this._children.push(child);
  return this;
};

/**
 * Client
 *   o manipulates objects in the composition through the Component interface.
 */
function client(component1, component2) {
  component1.add(component2).draw();
}