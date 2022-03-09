// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

/**
 * @class Size
 *  Store the windows dimensions
 */
export class Size {
  /**
   * @brief Constructor of the Size class
   * @param {number} width Width of the screen
   * @param {number} height Height of the screen
   */
  constructor(width = 80, height = 60) {
    this._width = width;
    this._height = height;
  }

  /**
   * @brief Width attribute getter
   * @return {number} Window's width
   */
  get width() {
    return this._width;
  }

  /**
   * @brief Height attribute getter
   * @return {number} Window's height
   */
  get height() {
    return this._height;
  }

  /**
   * @brief Resize the dimensions of the window
   * @param {number} newWidth New width of the windows
   * @param {number} newHeight New height of the windows
   */
  resize(newWidth, newHeight) {
    this._width = newWidth;
    this._height = newHeight;
  }
}

/**
 * @class Position
 *  Store the horizontal and vertical position
 */
export class Position {
  /**
   * @brief Constructor or the Size class
   * @param {number} x Horizontal position of the screen
   * @param {number} y Vertical position of the screen
   */
  constructor(x = 0, y = 0) {
    this._x = x;
    this._y = y;
  }

  /**
   * @brief X attribute getter
   * @return {number} Horizontal position
   */
   get x() {
    return this._x;
  }

  /**
   * @brief Y attribute getter
   * @return {number} Vertical position
   */
   get y() {
    return this._y;
  }

  /**
   * @brief Move the screen
   * @param {number} x_mov Horizontal movement
   * @param {number} y_mov Vertical movement
   */
  move(x_mov, y_mov) {
    this._x = x_mov;
    this._y = y_mov;
  }
}

/**
 * @class ProgramWindow
 *  Store the basic features of a window 
 */
export class ProgramWindow {
  /**
   * @brief Contructor of the ProgramWindow class
   */
  constructor() {
    this._screenSize = new Size(800, 600);
    this._size = new Size();
    this._position = new Position();
  }

  /**
   * @brief Screen Size atribute getter
   */
   get screenSize() {
    return this._screenSize;
  }
  
  /**
   * @brief Size atribute getter
   */
   get size() {
    return this._size;
  }
  
  /**
   * @brief Position atribute getter
   */
   get position() {
    return this._position;
  }

  /**
   * @brief Resize the size of the window
   * @param {Size} newSize New size of the window 
   */
  resize(newSize) {
    let newHeight;
    let newWidth;
    
    newSize.height > 0 ? newHeight = newSize.height : newHeight = 1; 
    newSize.width > 0 ? newWidth = newSize.width : newWidth = 1; 

    if (newSize.height > this._screenSize.height - this._position.y) {
      newHeight = this._screenSize.height - this._position.y;
    }
    if (newSize.width > this._screenSize.width - this._position.x) { 
      newWidth = this._screenSize.width - this._position.x;
    }
    
    this._size.resize(newWidth, newHeight);
  }

  /**
   * @brief Move the window
   * @param {Position} newPosition New position of the window
   */
  move (newPosition) {
    let newX;
    let newY;

    newPosition.x < 0 ? newX = 0 : newX = newPosition.x;
    newPosition.y < 0 ? newY = 0 : newY = newPosition.y;

    if (newPosition.x > this._screenSize._width - this._size._width) {
      newX = this._screenSize._width - this._size._width;
    }
    if (newPosition.y > this._screenSize._height - this._size._height) {
      newY = this._screenSize._height - this._size._height;
    }
    
    this._position.move(newX, newY);
  }
}

/**
 * @brief Change a window to a specific size and position
 * @param {ProgramWindow} programWindow The window to change 
 */
export const changeWindow = programWindow => {
  const newSize = new Size(400, 300);
  const newPosition = new Position(100, 150);

  programWindow.resize(newSize);
  programWindow.move(newPosition);

  return programWindow;
}