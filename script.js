
function setup() {
  const container = document.querySelector("section")

  const params = { 
    width: 1000, 
    height: 750 
  }
  
  const two = new Two(params)
  two.appendTo(container)
  
  const width = 500
  const sw = 10
  const squaresAcross = width / sw;

  // config for our animation
  const numberOfShapes = 50
  const shapes = []
  
  // make shapes
  
  //x=9 y=23
  
  shapes.push({x: 9, y: 23, color: "#ffffff"})
  shapes.push({x: 10, y: 23, color: "#ffffff"})
  shapes.push({x: 10, y: 24, color: "#ccd3f7"})
  shapes.push({x: 11, y: 23, color: "#633f31"})
  shapes.push({x: 11, y: 24, color: "#ccd3f7"})
  shapes.push({x: 12, y: 24, color: "#ccd3f7"})
  shapes.push({x: 13, y: 24, color: "#ccd3f7"})
  shapes.push({x: 14, y: 24, color: "#ccd3f7"})
  for(i = 0; i < 26; i++) {
    shapes.push({x: i+15, y: 24, color: "#ffffff"})
  }

  shapes.push({x: 12, y: 23, color: "#633f31"})
  shapes.push({x: 13, y: 23, color: "#633f31"})
  shapes.push({x: 14, y: 23, color: "#633f31"})
  shapes.push({x: 12, y: 22, color: "#633f31"})
  shapes.push({x: 13, y: 22, color: "#633f31"})
  shapes.push({x: 13, y: 21, color: "#633f31"})
  shapes.push({x: 13, y: 20, color: "#633f31"})
  shapes.push({x: 13, y: 19, color: "#633f31"})
  shapes.push({x: 15, y: 23, color: "#633f31"})

  for(i = 0; i < 9; i++) {
    shapes.push({x: i+13, y: 18, color: "#79544c"})
  }

  for(i = 0; i < 7; i++) {
    shapes.push({x: i+14, y: 19, color: "#79544c"})
  }

  for(i = 0; i < 7; i++) {
    shapes.push({x: i+14, y: 20, color: "#79544c"})
  }

  for(i = 0; i < 6; i++) {
    shapes.push({x: i+14, y: 21, color: "#79544c"})
  }

  for(i = 0; i < 6; i++) {
    shapes.push({x: i+14, y: 22, color: "#79544c"})
  }

  for(i = 0; i < 4; i++) {
    shapes.push({x: i+16, y: 23, color: "#79544c"})
  }
  
  var k = 17
  for(i = 0; i < 6; i++) {
    shapes.push({x: i+14, y: k, color: "#c69794"})
    k--;
  }

  for(i = 0; i < 3; i++) {
    shapes.push({x: i+21, y: 11, color: "#c69794"})
  }

  shapes.push({x: 20, y: 12, color: "#c69794"})
  shapes.push({x: 21, y: 12, color: "#c69794"})



  shapes.push({x: 15, y: 17, color: "#79544c"})
  shapes.push({x: 16, y: 17, color: "#79544c"})
  shapes.push({x: 16, y: 16, color: "#79544c"})
  shapes.push({x: 18, y: 17, color: "#79544c"})
  shapes.push({x: 19, y: 17, color: "#79544c"})
  shapes.push({x: 20, y: 17, color: "#79544c"})
  shapes.push({x: 21, y: 17, color: "#79544c"})

  shapes.push({x: 17, y: 15, color: "#c69794"})
  shapes.push({x: 17, y: 16, color: "#c69794"})
  shapes.push({x: 17, y: 17, color: "#c69794"})
  shapes.push({x: 18, y: 16, color: "#c69794"})
  shapes.push({x: 18, y: 14, color: "#c69794"})
  shapes.push({x: 19, y: 14, color: "#c69794"})
  shapes.push({x: 19, y: 13, color: "#c69794"})
  shapes.push({x: 20, y: 13, color: "#c69794"})
  shapes.push({x: 20, y: 14, color: "#c69794"})
  shapes.push({x: 20, y: 15, color: "#c69794"})
  shapes.push({x: 20, y: 16, color: "#c69794"})

  shapes.push({x: 18, y: 15, color: "#79544c"})
  shapes.push({x: 19, y: 15, color: "#79544c"})
  shapes.push({x: 19, y: 16, color: "#79544c"})
  shapes.push({x: 19, y: 17, color: "#79544c"})


  //633f31
  shapes.push({x: 24, y: 11, color: "#633f31"})
  shapes.push({x: 25, y: 11, color: "#633f31"})
  shapes.push({x: 26, y: 11, color: "#633f31"})
  shapes.push({x: 27, y: 11, color: "#633f31"})
  shapes.push({x: 28, y: 12, color: "#633f31"})
  shapes.push({x: 29, y: 12, color: "#633f31"})
  shapes.push({x: 30, y: 12, color: "#633f31"})
  shapes.push({x: 31, y: 13, color: "#633f31"})
  shapes.push({x: 32, y: 13, color: "#633f31"})
  shapes.push({x: 33, y: 14, color: "#633f31"})
  shapes.push({x: 34, y: 15, color: "#633f31"})
  shapes.push({x: 35, y: 16, color: "#633f31"})
  shapes.push({x: 21, y: 13, color: "#633f31"})
  shapes.push({x: 22, y: 12, color: "#633f31"})
  shapes.push({x: 23, y: 12, color: "#633f31"})
  shapes.push({x: 27, y: 14, color: "#633f31"})
  shapes.push({x: 28, y: 14, color: "#633f31"})
  shapes.push({x: 29, y: 14, color: "#633f31"})
  shapes.push({x: 30, y: 14, color: "#633f31"})
  shapes.push({x: 23, y: 16, color: "#633f31"})
  shapes.push({x: 24, y: 16, color: "#633f31"})
  shapes.push({x: 22, y: 17, color: "#633f31"})
  shapes.push({x: 23, y: 17, color: "#633f31"})
  shapes.push({x: 22, y: 18, color: "#633f31"})
  shapes.push({x: 23, y: 18, color: "#633f31"})
  shapes.push({x: 21, y: 19, color: "#633f31"})
  shapes.push({x: 22, y: 19, color: "#633f31"})

  shapes.push({x: 21, y: 14, color: "#79544c"})
  shapes.push({x: 21, y: 15, color: "#79544c"})
  shapes.push({x: 21, y: 16, color: "#79544c"})
  shapes.push({x: 21, y: 17, color: "#79544c"})
  shapes.push({x: 20, y: 17, color: "#79544c"})

  shapes.push({x: 22, y: 14, color: "#79544c"})
  shapes.push({x: 22, y: 15, color: "#79544c"})
  shapes.push({x: 22, y: 16, color: "#79544c"})
  shapes.push({x: 24, y: 12, color: "#79544c"})
  shapes.push({x: 25, y: 12, color: "#79544c"})
  shapes.push({x: 26, y: 12, color: "#79544c"})
  shapes.push({x: 27, y: 12, color: "#79544c"})
  shapes.push({x: 27, y: 13, color: "#79544c"})
  shapes.push({x: 28, y: 13, color: "#79544c"})
  shapes.push({x: 29, y: 13, color: "#79544c"})
  shapes.push({x: 30, y: 13, color: "#79544c"})
  shapes.push({x: 25, y: 15, color: "#79544c"})
  shapes.push({x: 26, y: 15, color: "#79544c"})
  shapes.push({x: 27, y: 15, color: "#79544c"})
  shapes.push({x: 25, y: 16, color: "#79544c"})
  shapes.push({x: 26, y: 16, color: "#79544c"})

  for(i = 0; i < 5; i++) {
    shapes.push({x: 22 + i, y: 13, color: "#baa1b0"})
  } 

  for(i = 0; i < 4; i++) {
    shapes.push({x: 23 + i, y: 14, color: "#baa1b0"})
  }

  for(i = 0; i < 2; i++) {
    shapes.push({x: 23 + i, y: 15, color: "#baa1b0"})
  }

  for(i = 0; i < 11; i++) {
    shapes.push({x: 24 + i, y: 17, color: "#baa1b0"})
  }

  for(i = 0; i < 12; i++) {
    shapes.push({x: 24 + i, y: 18, color: "#baa1b0"})
  }

  shapes.push({x: 31, y: 14, color: "#baa1b0"})
  shapes.push({x: 32, y: 14, color: "#baa1b0"})
  shapes.push({x: 28, y: 15, color: "#baa1b0"})
  shapes.push({x: 27, y: 16, color: "#baa1b0"})

  for(i = 0; i < 5; i++) {
    shapes.push({x: 29 + i, y: 16, color: "#baa1b0"})
  }
  for(i = 0; i < 5; i++) {
    shapes.push({x: 29 + i, y: 15, color: "#633f31"})
  }
  shapes.push({x: 28, y: 16, color: "#633f31"})
  shapes.push({x: 34, y: 16, color: "#633f31"})
  shapes.push({x: 35, y: 17, color: "#633f31"})
  shapes.push({x: 36, y: 18, color: "#633f31"})

  for(i = 0; i < 4; i++) {
    shapes.push({x: 36, y: 18 + i, color: "#633f31"})
  }
  shapes.push({x: 20, y: 21, color: "#633f31"})

  shapes.push({x: 21, y: 20, color: "#633f31"})
  shapes.push({x: 21, y: 21, color: "#633f31"})

  shapes.push({x: 22, y: 22, color: "#79544c"})
  shapes.push({x: 23, y: 22, color: "#79544c"})

  shapes.push({x: 24, y: 21, color: "#79544c"})

  shapes.push({x: 27, y: 19, color: "#79544c"})
  shapes.push({x: 27, y: 20, color: "#79544c"})

  shapes.push({x: 29, y: 21, color: "#79544c"})
  shapes.push({x: 29, y: 22, color: "#79544c"})
  shapes.push({x: 29, y: 23, color: "#79544c"})

  for(i = 0; i < 4; i++) {
    shapes.push({x: 32 + i, y: 23, color: "#79544c"})
  }

  shapes.push({x: 36, y: 22, color: "#79544c"})

  for(i = 0; i < 4; i++) {
    shapes.push({x: 37, y: 20+i, color: "#633f31"})
  }

  shapes.push({x: 36, y: 23, color: "#633f31"})

  shapes.push({x: 20, y: 22, color: "#baa1b0"})
  shapes.push({x: 21, y: 22, color: "#baa1b0"})

  for(i = 0; i < 9; i++) {
    shapes.push({x: 20 + i, y: 23, color: "#baa1b0"})
  }

  for(i = 0; i < 13; i++) {
    if(i!==4 ){
      shapes.push({x: 23 + i, y: 19, color: "#baa1b0"})
    }
  }

  for(i = 0; i < 14; i++) {
    if(i!==5 ){
      shapes.push({x: 22 + i, y: 20, color: "#baa1b0"})
    }
  }

  for(i = 0; i < 14; i++) {
    if(i!==2 && i!==7 ){
      shapes.push({x: 22 + i, y: 21, color: "#baa1b0"})
    }
  }

  for(i = 0; i < 12; i++) {
    if(i!==5 ){
      shapes.push({x: 24 + i, y: 22, color: "#baa1b0"})
    }
  }

  shapes.push({x: 30, y: 23, color: "#baa1b0"})
  shapes.push({x: 31, y: 23, color: "#baa1b0"})

  shapes.push({x: 36, y: 17, color: "#baa1b0"})

  shapes.push({x: 38, y: 23, color: "#ccd3f7"})
  shapes.push({x: 39, y: 23, color: "#ccd3f7"})
  shapes.push({x: 40, y: 23, color: "#ffffff"})
  shapes.push({x: 41, y: 23, color: "#ccd3f7"})
  shapes.push({x: 42, y: 23, color: "#ccd3f7"})
  shapes.push({x: 41, y: 24, color: "#ccd3f7"})
  shapes.push({x: 41, y: 25, color: "#ccd3f7"})

  for(i = 0; i < 30; i++) {
    if(i!==24){
      shapes.push({x: 11 + i, y: 25, color: "#c9e8af"})
    }
  }

  for(i = 0; i < 23; i++) {
    if(i!==7 && i!==20){
      shapes.push({x: 15 + i, y: 26, color: "#c9e8af"})
    }
  }

  for(i = 0; i < 12; i++) {
    for(j = 0; j < 5; j++) {
        shapes.push({x: 20 + i, y:  29+j, color: "#c9e8af"})
    }
  }

  for(i = 0; i < 12; i++) {
    for(j = 0; j < 5; j++) {
        shapes.push({x: 20 + i, y:  36+j, color: "#c9e8af"})
    }
  }

  shapes.push({x: 20, y: 29, color: "#c9e8af"})
  shapes.push({x: 20, y: 30, color: "#c9e8af"})
  shapes.push({x: 31, y: 29, color: "#c9e8af"})
  shapes.push({x: 31, y: 30, color: "#c9e8af"})

  for(i = 0; i < 3; i++) {
      shapes.push({x: 16 + i, y: 27, color: "#c9e8af"})
  }
  for(i = 0; i < 3; i++) {
    shapes.push({x: 16 + i, y: 28, color: "#c9e8af"})
}

// for(i = 0; i < 6; i++) {
//   shapes.push({x: 17, y: 26 + i, color: "#c9e8af"})
// }

// for(i = 0; i < 16; i++) {
//   if(i!==7) {
//     shapes.push({x: 18, y: 26 + i, color: "#c9e8af"})
//   }
// }

// for(i = 0; i < 8; i++) {
//   shapes.push({x: 19, y: 34 + i, color: "#c9e8af"})
// }

shapes.push({x: 16, y: 34, color: "#c9e8af"})
shapes.push({x: 17, y: 34, color: "#c9e8af"})
shapes.push({x: 23, y: 27, color: "#c9e8af"})

// for(i = 0; i < 5; i++) {
//   shapes.push({x: 23, y: 37 + i, color: "#c9e8af"})
// }

for(i = 0; i < 10; i++) {
  shapes.push({x: 21+i, y: 34, color: "#512b24"})
}
for(i = 0; i < 10; i++) {
  shapes.push({x: 21+i, y: 35, color: "#512b24"})
}

shapes.push({x: 13, y: 34, color: "#512b24"})


shapes.push({x: 11, y: 26, color: "#ab410d"})
shapes.push({x: 12, y: 26, color: "#ab410d"})
shapes.push({x: 13, y: 26, color: "#ab410d"})
shapes.push({x: 11, y: 27, color: "#ab410d"})
shapes.push({x: 12, y: 27, color: "#ab410d"})
shapes.push({x: 13, y: 27, color: "#ab410d"})
shapes.push({x: 15, y: 27, color: "#ab410d"})

shapes.push({x: 14, y: 26, color: "#950126"})
shapes.push({x: 14, y: 27, color: "#950126"})

for(i = 0; i < 5; i++) {
  shapes.push({x: 11+i, y: 28, color: "#950126"})
}
for(i = 0; i < 14; i++) {
  shapes.push({x: 19+i, y: 28, color: "#950126"})
}

for(i = 0; i < 5; i++) {
  shapes.push({x: 15+i, y: 29, color: "#950126"})
}

for(i = 0; i < 4; i++) {
  shapes.push({x: 11+i, y: 29, color: "#abb53b"})
}

for(i = 0; i < 3; i++) {
  shapes.push({x: 19+i, y: 27, color: "#f0a541"})
}

for(i = 0; i < 8; i++) {
  shapes.push({x: 24+i, y: 27, color: "#f0a541"})
}

for(i = 0; i < 2; i++) {
  shapes.push({x: 22, y: 26+i, color: "#950126"})
}

for(i = 0; i < 7; i++) {
  shapes.push({x: 35, y: 25+i, color: "#950126"})
}

for(i = 0; i < 13; i++) {
  shapes.push({x: 32, y: 29+i, color: "#950126"})
}

for(i = 0; i < 9; i++) {
  shapes.push({x: 19, y: 30+i, color: "#950126"})
}

for(i = 0; i < 12; i++) {
  shapes.push({x: 20+i, y: 41, color: "#950126"})
}

for(i = 0; i < 6; i++) {
  shapes.push({x: 22, y: 42+i, color: "#950126"})
}
for(i = 0; i < 2; i++) {
  shapes.push({x: 14, y: 30+i, color: "#950126"})
}

shapes.push({x: 12, y: 31, color: "#950126"})

for(i = 0; i < 3; i++) {
  shapes.push({x: 12, y: 34+i, color: "#950126"})
}

for(i = 0; i < 5; i++) {
  shapes.push({x: 15, y: 36+i, color: "#950126"})
}

for(i = 0; i < 3; i++) {
  shapes.push({x: 15, y: 44+i, color: "#950126"})
}

for(i = 0; i < 2; i++) {
  shapes.push({x: 13 + i, y: 36, color: "#950126"})
}

for(i = 0; i < 2; i++) {
  shapes.push({x: 13 + i, y: 38, color: "#950126"})
}

for(i = 0; i < 3; i++) {
  shapes.push({x: 16 + i, y: 38, color: "#950126"})
}

for(i = 0; i < 2; i++) {
  shapes.push({x: 33 + i, y: 39, color: "#950126"})
}

for(i = 0; i < 2; i++) {
  shapes.push({x: 33 + i, y: 29, color: "#950126"})
}

for(i = 0; i < 2; i++) {
  shapes.push({x: 36 + i, y: 38, color: "#950126"})
}

for(i = 0; i < 2; i++) {
  shapes.push({x: 36 + i, y: 29, color: "#950126"})
}

for(i = 0; i < 4; i++) {
  shapes.push({x: 37 + i, y: 28, color: "#950126"})
}

for(i = 0; i < 2; i++) {
  shapes.push({x: 39 + i, y: 31, color: "#950126"})
}

for(i = 0; i < 2; i++) {
  shapes.push({x: 39, y: 36+i, color: "#950126"})
}

for(i = 0; i < 7; i++) {
  shapes.push({x: 34, y: 41+i, color: "#950126"})
}

for(i = 0; i < 6; i++) {
  shapes.push({x: 35, y: 37+i, color: "#950126"})
}

for(i = 0; i < 2; i++) {
  shapes.push({x: 36+i, y: 42, color: "#950126"})
}

for(i = 0; i < 6; i++) {
  shapes.push({x: 11, y:  30+i, color: "#ab410d"})
}

for(i = 0; i < 2; i++) {
  shapes.push({x: 13, y:  30+i, color: "#ab410d"})
}

for(i = 0; i < 2; i++) {
  shapes.push({x: 16, y:  31+i, color: "#ab410d"})
}

for(i = 0; i < 2; i++) {
  shapes.push({x: 11, y:  39+i, color: "#ab410d"})
}

for(i = 0; i < 3; i++) {
  shapes.push({x: 12, y:  39+i, color: "#ab410d"})
}

for(i = 0; i < 4; i++) {
  shapes.push({x: 13, y:  40+i, color: "#ab410d"})
}

for(i = 0; i < 6; i++) {
  shapes.push({x: 14, y:  40+i, color: "#ab410d"})
}

for(i = 0; i < 3; i++) {
  shapes.push({x: 15, y:  41+i, color: "#ab410d"})
}

for(i = 0; i < 3; i++) {
  shapes.push({x: 17, y:  44+i, color: "#ab410d"})
}

for(i = 0; i < 3; i++) {
  shapes.push({x: 39, y:  44+i, color: "#ab410d"})
}

shapes.push({x: 11, y:  37, color: "#ab410d"})
shapes.push({x: 12, y:  30, color: "#ab410d"})


for(i = 0; i < 4; i++) {
  shapes.push({x: 15+i, y: 30, color: "#abb53b"})
}

for(i = 0; i < 3; i++) {
  shapes.push({x: 38+i, y: 29, color: "#abb53b"})
}

for(i = 0; i < 2; i++) {
  shapes.push({x: 12, y: 42+i, color: "#abb53b"})
}

for(i = 0; i < 2; i++) {
  shapes.push({x: 16, y: 45+i, color: "#abb53b"})
}

for(i = 0; i < 4; i++) {
  shapes.push({x: 17, y: 40+i, color: "#abb53b"})
}

for(i = 0; i < 2; i++) {
  shapes.push({x: 12, y: 32+i, color: "#abb53b"})
}

for(i = 0; i < 2; i++) {
  shapes.push({x: 13, y: 32+i, color: "#abb53b"})
}

for(i = 0; i < 4; i++) {
  shapes.push({x: 14, y: 32+i, color: "#abb53b"})
}

for(i = 0; i < 5; i++) {
  shapes.push({x: 15, y: 31+i, color: "#abb53b"})
}

for(i = 0; i < 2; i++) {
  shapes.push({x: 11+i, y: 38, color: "#abb53b"})
}

for(i = 0; i < 3; i++) {
  shapes.push({x: 12+i, y: 37, color: "#abb53b"})
}

for(i = 0; i < 2; i++) {
  shapes.push({x: 16+i, y: 37, color: "#abb53b"})
}

for(i = 0; i < 2; i++) {
  shapes.push({x: 13+i, y: 39, color: "#abb53b"})
}

shapes.push({x: 11, y: 36, color: "#abb53b"})
shapes.push({x: 13, y: 35, color: "#abb53b"})


for(i = 0; i < 4; i++) {
  shapes.push({x: 16, y: 33+i, color: "#f0a541"})
}

for(i = 0; i < 5; i++) {
  shapes.push({x: 16, y: 40+i, color: "#f0a541"})
}

for(i = 0; i < 5; i++) {
  shapes.push({x: 20, y: 42+i, color: "#f0a541"})
  shapes.push({x: 21, y: 42+i, color: "#f0a541"})
  shapes.push({x: 24, y: 42+i, color: "#f0a541"})
  shapes.push({x: 25, y: 42+i, color: "#f0a541"})
  shapes.push({x: 26, y: 42+i, color: "#f0a541"})
  shapes.push({x: 27, y: 42+i, color: "#f0a541"})
  shapes.push({x: 28, y: 42+i, color: "#f0a541"})
  shapes.push({x: 29, y: 42+i, color: "#f0a541"})
  shapes.push({x: 30, y: 42+i, color: "#f0a541"})

}

for(i = 0; i < 3; i++) {
  shapes.push({x: 38+i, y: 26, color: "#f0a541"})
  shapes.push({x: 38+i, y: 27, color: "#f0a541"})
  shapes.push({x: 38+i, y: 30, color: "#f0a541"})
}

for(i = 0; i < 4; i++) {
  shapes.push({x: 36+i, y: 40, color: "#f0a541"})
  shapes.push({x: 36+i, y: 41, color: "#f0a541"})
}

for(i = 0; i < 6; i++) {
  shapes.push({x: 33, y: 41+i, color: "#f0a541"})
}

for(i = 0; i < 5; i++) {
  shapes.push({x: 37, y: 32+i, color: "#f0a541"})
}

for(i = 0; i < 6; i++) {
  shapes.push({x: 38, y: 31+i, color: "#f0a541"})
}

for(i = 0; i < 2; i++) {
  shapes.push({x: 39, y: 42+i, color: "#f0a541"})
}

for(i = 0; i < 2; i++) {
  shapes.push({x: 39, y: 32+i, color: "#aa892c"})
}

for(i = 0; i < 4; i++) {
  shapes.push({x: 12, y: 44+i, color: "#7f6a4b"})
  shapes.push({x: 13, y: 44+i, color: "#7f6a4b"})
}

for(i = 0; i < 8; i++) {
  shapes.push({x: 14+i, y: 47, color: "#7f6a4b"})
}

for(i = 0; i < 11; i++) {
  shapes.push({x: 23+i, y: 47, color: "#7f6a4b"})
}
shapes.push({x: 39, y: 47, color: "#7f6a4b"})

for(i = 0; i < 2; i++) {
  shapes.push({x: 37+i, y: 45, color: "#7f6a4b"})
}
for(i = 0; i < 3; i++) {
  shapes.push({x: 36+i, y: 46, color: "#7f6a4b"})
}


shapes.push({x: 14, y: 46, color: "#7f6a4b"})

for(i = 0; i < 5; i++) {
  shapes.push({x: 23 , y: 42 + i, color: "#c9e8af"})
  shapes.push({x: 31 , y: 42 + i, color: "#c9e8af"})
  shapes.push({x: 32 , y: 42 + i, color: "#c9e8af"})
  shapes.push({x: 35 , y: 43 + i, color: "#c9e8af"})
}

for(i = 0; i < 4; i++) {
  shapes.push({x: 33+i , y: 32 , color: "#c9e8af"})
  shapes.push({x: 33+i , y: 33 , color: "#c9e8af"})
  shapes.push({x: 33+i , y: 34 , color: "#c9e8af"})
  shapes.push({x: 33+i , y: 35 , color: "#c9e8af"})
  shapes.push({x: 33+i , y: 36 , color: "#c9e8af"})

}

for(i = 0; i < 3; i++) {
  shapes.push({x: 36+i , y: 47 , color: "#c9e8af"})
  shapes.push({x: 36+i , y: 44 , color: "#c9e8af"})
  shapes.push({x: 36+i , y: 43 , color: "#c9e8af"})
}

for(i = 0; i < 2; i++) {
  shapes.push({x: 20, y: 34+i, color: "#c9e8af"})
  shapes.push({x: 31, y: 34+i, color: "#c9e8af"})
}

for(i = 0; i < 6; i++) {
  shapes.push({x: 17, y: 31+i, color: "#c9e8af"})
}

for(i = 0; i < 7; i++) {
  shapes.push({x: 18, y: 31+i, color: "#c9e8af"})
}

for(i = 0; i < 2; i++) {
  shapes.push({x: 16 + i, y: 39, color: "#c9e8af"})
  shapes.push({x: 33 + i, y: 40, color: "#c9e8af"})
  shapes.push({x: 33 + i, y: 38, color: "#c9e8af"})
  shapes.push({x: 33 + i, y: 37, color: "#c9e8af"})
  shapes.push({x: 33 + i, y: 30, color: "#c9e8af"})
  shapes.push({x: 33 + i, y: 31, color: "#c9e8af"})
  shapes.push({x: 36 + i, y: 31, color: "#c9e8af"})
  shapes.push({x: 36 + i, y: 30, color: "#c9e8af"})
  shapes.push({x: 33 + i, y: 28, color: "#c9e8af"})
  shapes.push({x: 36 + i, y: 28, color: "#c9e8af"})
  shapes.push({x: 36 + i, y: 27, color: "#c9e8af"})
  shapes.push({x: 39, y: 34+i, color: "#c9e8af"})
  shapes.push({x: 39, y: 38+i, color: "#c9e8af"})


}

for(i = 0; i < 3; i++) {
  shapes.push({x: 32 + i, y: 27, color: "#c9e8af"})
  shapes.push({x: 36 + i, y: 39, color: "#c9e8af"})
  shapes.push({x: 36 + i, y: 37, color: "#c9e8af"})
}

shapes.push({x: 38, y: 38, color: "#c9e8af"})

for(i = 0; i < 9; i++) {
  shapes.push({x: 40, y: 32 + i, color: "#c9e8af"})
  }


for(i = 0; i < 8; i++) {
  shapes.push({x: 18, y: 39+i, color: "#c9e8af"})
  shapes.push({x: 19, y: 39+i, color: "#c9e8af"})

}



shapes.push({x: 36 , y: 45 , color: "#c9e8af"})
shapes.push({x: 38 , y: 42 , color: "#c9e8af"})

function randomNumber(min, max) {
  return Math.random() * (max - min) + min
}

const fullRotation = Math.PI * 2;

function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
}

var rects = []
  shapes.forEach((shape, i ) => {
      const sx = shape["x"] * sw + 250
      const sy = shape["y"] * sw + 250
      const ex = randomNumber(0, 1000)
      const ey = randomNumber(0, 750)

      const sr = 0
      const er = randomNumber(-2 * fullRotation, 2 * fullRotation)

      const rect = two.makeRectangle(sx, sy, sw, sw)
      rect.fill = shape["color"];
      rect.noStroke();
      rects.push(rect)
      rect.data = {
        sx: sx,
        sy: sy,
        ex: ex,
        ey: ey,
        sr: sr,
        er: er,
      }
      
  })
  
  const loopDuration = 60 * 6
  const aDelay = 0.00025

  two.bind("update", function (frameCount) {
    // draw
    const currentFrame = frameCount % loopDuration
    const t = currentFrame / loopDuration

    rects.forEach((rect, i) => {
        const aStart = aDelay * i
        var u = 0 
        if (t < 0.5) {
          u = mapAndClamp(t, aStart, 0.5, 0, 1)
        }
        else {
          u = mapAndClamp(t, 0.5 + aStart, 1, 1, 0)
        }

        const cu = easeInOutCubic(u)
        const x = mapAndClamp(cu, 0, 1, rect.data.sx, rect.data.ex)
        const y = mapAndClamp(cu, 0, 1, rect.data.sy, rect.data.ey)
        const r = mapAndClamp(cu, 0, 1, rect.data.sr, rect.data.er)

        rect.translation.x = x
        rect.translation.y = y
        rect.rotation = r

    })

  })
  
  two.play()
}