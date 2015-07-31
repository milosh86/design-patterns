//Define a family of algorithms, encapsulate each one, and make them interchangeable.
//Strategy lets the algorithm vary independently from clients that use it.

class BasicAuthenticator {
  constructor() {
    this._encryptor = null || 'default implementation';
  }
  
  /**
   * Use any encryption algorithm by setting encryptor object or use default one
   */
  setEncryptor(encryptor) {
    this._encryptor = encryptor;
  }
  
  submitCredentials(usr, pass) {
    var epass = this._encryptor.encrypt(pass);
    
    this._submit(usr, epass);
  }
}

// usage
var auth = new BasicAuthenticator();
var basic = {
  encrypt(text) {
    return 'Encrypted (basic): ' + text;
  }
};
var advanced = {
  encrypt(text) {
    return 'Encrypted (advanced): ' + text;
  }
};

auth.setEncryptor(basic);
auth.submitCredentials('testuser', '12345');

auth.setEncryptor(advanced);
auth.submitCredentials('testuser', '12345');


// Strategies eliminate conditional statements and push out algorithm's implementation details from the class/object.
// Counterexample of above strategy implementation.
class BasicAuthenticator {
  constructor() {
    this._encryptorType = 'none';
  }
  
  submitCredentials(usr, pass) {
    switch(this._encryptorType) {
      case 'none':
        this._submit(usr, pass);
        break;
      case 'basic':
        var epass = this.basicEncryptor.encrypt(pass);
        this._submit(usr, epass);
        break;
      case 'advanced':
        var epass = this.advancedEncryptor.encrypt(pass);
        this._submit(usr, epass);
        break;
    }
  }
}