import Rectangle from './components/Rectangle.js';
import Window from './components/Window.js';
import Row from './components/Row.js'

var win = new Window;
var rect1 = Rectangle.create({x: 0, y: 0}, {x: 100, y: 100});
var rect2 = Rectangle.create({x: 10, y: 10}, {x: 100, y: 100});
var rect3 = Rectangle.create({x: 20, y: 20}, {x: 100, y: 100});

var row = Row.create();

row.insert(rect1);
row.insert(rect2);
row.insert(rect3);

row.draw(win);
