// Constructor.

var Interface = function(name, methods) {
    if(arguments.length != 2) {
        throw new Error("Interface constructor called with " + arguments.length
          + "arguments, but expected exactly 2.");
    }
    
    this.name = name;
    this.methods = [];
    for(var i = 0, len = methods.length; i < len; i++) {
        if(typeof methods[i] !== 'string') {
            throw new Error("Interface constructor expects method names to be " 
              + "passed in as a string.");
        }
        this.methods.push(methods[i]);        
    }    
};    

// Static class method.

Interface.ensureImplements = function(object) {
    if(arguments.length < 2) {
        throw new Error("Function Interface.ensureImplements called with " + 
          arguments.length  + "arguments, but expected at least 2.");
    }

    for(var i = 1, len = arguments.length; i < len; i++) {
        var interface = arguments[i];
        if(interface.constructor !== Interface) {
            throw new Error("Function Interface.ensureImplements expects arguments "   
              + "two and above to be instances of Interface.");
        }
        
        for(var j = 0, methodsLen = interface.methods.length; j < methodsLen; j++) {
            var method = interface.methods[j];
            if(!object[method] || typeof object[method] !== 'function') {
                throw new Error("Function Interface.ensureImplements: object " 
                  + "does not implement the " + interface.name 
                  + " interface. Method " + method + " was not found.");
            }
        }
    } 
};

/* ReversibleCommand interface. */

var ReversibleCommand = new Interface('ReversibleCommand', ['execute', 'undo']);

/* Movement commands. */

var MoveUp = function(cursor) { // implements ReversibleCommand
  this.cursor = cursor;
};
MoveUp.prototype = {
  execute: function() {
    cursor.move(0, -10);
  },
  undo: function() {
    cursor.move(0, 10);    
  }
};

var MoveDown = function(cursor) { // implements ReversibleCommand
  this.cursor = cursor;
};
MoveDown.prototype = {
  execute: function() {
    cursor.move(0, 10);
  },
  undo: function() {
    cursor.move(0, -10);    
  }
};

var MoveLeft = function(cursor) { // implements ReversibleCommand
  this.cursor = cursor;
};
MoveLeft.prototype = {
  execute: function() {
    cursor.move(-10, 0);
  },
  undo: function() {
    cursor.move(10, 0);    
  }
};

var MoveRight = function(cursor) { // implements ReversibleCommand
  this.cursor = cursor;
};
MoveRight.prototype = {
  execute: function() {
    cursor.move(10, 0);
  },
  undo: function() {
    cursor.move(-10, 0);    
  }
};

/* Cursor class. */

var Cursor = function(width, height, parent) {
    console.log("parent", parent);
  this.width = width;
  this.height = height;
  this.position = { x: width / 2, y: height / 2 };

  this.canvas = document.createElement('canvas');
  this.canvas.width = this.width;
  this.canvas.height = this.height;
  parent.appendChild(this.canvas);
  
  this.ctx = this.canvas.getContext('2d');
  this.ctx.fillStyle = '#cc0000';
  this.move(0, 0);  
};
Cursor.prototype.move = function(x, y) {
  this.position.x += x;
  this.position.y += y; 

  this.ctx.clearRect(0, 0, this.width, this.height);
  this.ctx.fillRect(this.position.x, this.position.y, 3, 3);
};

/* UndoDecorator class. */

var UndoDecorator = function(command, undoStack) { // implements ReversibleCommand
  this.command = command;
  this.undoStack = undoStack;
};
UndoDecorator.prototype = {
  execute: function() {
    this.undoStack.push(this.command);
    this.command.execute();
  },
  undo: function() {
    this.command.undo();
  }
};

/* CommandButton class. */

var CommandButton = function(label, command, parent) {
  Interface.ensureImplements(command, ReversibleCommand);
  this.element = document.createElement('button');
  this.element.innerHTML = label;
  parent.appendChild(this.element);
  
 addEvent(this.element, 'click', function() {
    command.execute();
  });
};

/* UndoButton class. */

var UndoButton = function(label, parent, undoStack) {
  this.element = document.createElement('button');
  this.element.innerHTML = label;
  parent.appendChild(this.element);
  
  addEvent(this.element, 'click', function() {
    if(undoStack.length === 0) return;
    var lastCommand = undoStack.pop();
    lastCommand.undo();
  });
};

/* Implementation code. */

var body = document.getElementsByTagName('body')[0];
var cursor = new Cursor(400, 400, body);
var undoStack = [];

var upCommand = new UndoDecorator(new MoveUp(cursor), undoStack);
var downCommand = new UndoDecorator(new MoveDown(cursor), undoStack);
var leftCommand = new UndoDecorator(new MoveLeft(cursor), undoStack);
var rightCommand = new UndoDecorator(new MoveRight(cursor), undoStack);

var upButton = new CommandButton('Up', upCommand, body);
var downButton = new CommandButton('Down', downCommand, body);
var leftButton = new CommandButton('Left', leftCommand, body);
var rightButton = new CommandButton('Right', rightCommand, body);
var undoButton = new UndoButton('Undo', body, undoStack);
