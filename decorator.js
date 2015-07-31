// Attach additional responsibilities to an object dynamically. 
// Decorators provide a flexible alternative to subclassing for extending functionality.
// Also known as Wrapper

// The decorator conforms to the interface of the component it decorates so that its presence is transparent to the component's clients. 
// The decorator forwards requests to the component and may perform additional actions (such as drawing a border) before or after forwarding. 
// Transparency lets you nest decorators recursively, thereby allowing an unlimited number of added responsibilities.

var someComponent = {
  operation() {}
}

function someDecorator(component) {
  return {
    operation() { // decorator keeps the same interface as component it wraps
      doSomeWorkBefore();
      component.operation();
      doSomeWorkAfter();
    }
    
    canAlsoAdd(additional) {'stuff'}
  }
}

var decorated = someDecorator(someComponent);
decorated.operation();


// ES7 decorators
var someComponent = {
  @decorate
  operation() {}
}
