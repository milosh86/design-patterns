class Compositor {
  constructor(composition) {
    this._composition = composition || null;
  }
  
  setComposition(composition) {
    this._composition = composition;
  }
  
  compose() {
    console.log('composing...');
  }
}

class SimpleCompositor extends Compositor {
  constructor() {
    super();
    Compositor.init.call(this);
  }
  
  compose() {
    
  }
}