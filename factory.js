// Define an interface for creating an object, but let subclasses decide which class to instantiate. 
// Factory Method lets a class defer instantiation to subclasses.
// It encapsulates the knowledge of which concrete subclass to create and moves this knowledge out of the framework(client)

// JS is dynamic and there is no type/class constraints when creating objects, so abstract layer of classes is not needed.
// We can just call factory function which returns apropriate objects.

// Participants:
/**
 * Product (i.e Document)
 *  - defines the interface of objects the factory method creates.
 *
 * No need for abstract classes/objects in JS. Instead ensure that all products implement the same interface.
 */
var product = {
  open() {},
  close() {},
  save() {}
};

// Factory methods eliminate the need to bind application-specific classes into your code. 
// The code only deals with the Product interface; therefore it can work with any user-defined ConcreteProduct classes.

/**
 * Creator
 *  - declares the factory method, which returns an object of type Product. 
 *    Creator may also define a default implementation of the factory method that returns a default ConcreteProduct object.
 *  - may call the factory method to create a Product object.
 */
class Creator {
  factoryMethod() {
    return new AnyProduct;
  }
  
  operation() {}
}

// or just
function createAnyProduct() {
  return new AnyProduct;
}

// Parameterized factory function - create multiple kinds of products.
// More idiomatic to JS
function createProduct(options) {
  switch (options.id) {
    case 'ID1':
      return new Product1(options);
      break;
    case 'ID2':
      return new Product2(options);
      break;
  }

  return new DefaultProduct(options);
}


// Abstract Factory
// Provide an interface for creating families of related or dependent objects without specifying their concrete classes.
// Encapsulate a group of individual factories with a common goal.

// Abstract Factory 1
let UIFactoryDark = {
  // Concrete Factory - produces product
  createButton() {},
  createScrollBar() {},
  createWindow() {}
  // ...
}

// Abstract Factory 2
let UIFactoryLight = {
  createButton() {},
  createScrollBar() {},
  createWindow() {}
  // ...
}

// client
class Application {
  constructor(UIFactory) {
    this._UIFactory = UIFactory;
  }
  
  generateUI() {
    let btn = this._UIFactory.crateButton();
    let mainWindow = this._UIFactory.crateWindow();
    // ...
  }
}

let app = new Application(UIFactoryDark);
app.generateUI();
// or submit factory directly instead through constructor
let app = new Application();
app.generateUI(UIFactoryLight);
