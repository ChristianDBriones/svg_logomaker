class Square {
  constructor(logotextcolor, logotext, logocolor ) {
    this.logotextcolor = logotextcolor;
    this.logotext = logotext;
    this.logocolor = logocolor;
  }

  getSvg(){
    return 
    `<svg width=“300” height=“300”>
  <rect width="300" height="300" style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)" />
</svg>`
  }
}

class Circle {
  constructor(logotextcolor, logotext, logocolor ) {
    this.logotextcolor = logotextcolor;
    this.logotext = logotext;
    this.logocolor = logocolor;
  }

  getSvg(){
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <circle cx="150" cy="100" r="80" fill= "${this.logocolor}" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.logotextcolor}">${this.logotext}</text>

</svg>`
  }
}

class Triangle {
  constructor(logotextcolor, logotext, logocolor ) {
    this.logotextcolor = logotextcolor;
    this.logotext = logotext;
    this.logocolor = logocolor;
  }

  getSvg(){
    return 
    `<svg width=“300” height=“300”>
  <rect width="300" height="300" style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)" />
</svg>`
  }
}

export {Square, Circle, Triangle};