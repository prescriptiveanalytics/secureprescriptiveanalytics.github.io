---
---

// variable for the namespace 
const svgns = "http://www.w3.org/2000/svg";

// targeting the svg itself
const svg = document.querySelector(".header-bg svg");



// let opacities = [ 0.10, 0.125, 0.15, 0.175 ];
// let opacities = [ 0.15, 0.175, 0.20, 0.225, 0.25 ];
let opacities = [ 0.15, 0.1675, 0.175, 0.1875, 0.20, 0.2175, 0.225, 0.2375, 0.25 ];
// let opacities = [ 0.025, 0.05, 0.075, 0.1, 0.125, 0.15, 0.175, 0.20, 0.225, 0.25 ];

for(let i = 0; i < 10; i++) {
    for(let j = 0; j < 10; j++) {
        let newRect = document.createElementNS(svgns, "rect");
        newRect.setAttribute("x", "" + i*10 + "%");
        newRect.setAttribute("y", "" + j*10 + "%");
        newRect.setAttribute("width", "10%");
        newRect.setAttribute("height", "10%");
        newRect.setAttribute("fill", "#ffffff");
        newRect.setAttribute("opacity", "" + opacities[getRndInteger(0, opacities.length)]);
        
        newRect.setAttribute("id", "x" + i + "y" + j);        
        svg.appendChild(newRect);                
    }   
}
// createGridAnimation_InsideOut();
createGridAnimation();
setInterval(createGridAnimation, 9000);

function createGridAnimation() {
    for(let i = 0; i < 10; i++) {
        for(let j = 0; j < 10; j++) {
            let rect = document.getElementById("x" + i + "y" + j);                        
            rect.setAttribute("class", "");
            rect.setAttribute("style", "animation:none;");
        }
    }
    setTimeout(() => {
        for(let y = 0; y < 10; y++) {
            for(let x = 0; x < 10; x++) {
                let rect = document.getElementById("x" + x + "y" + y);                        
                rect.setAttribute("style", `animation: box3 10s linear ${y*100}ms;`);
            }
        }
    
        setFigure();
        console.log("reconfigured animation");
    }, 250);
}

function setFigure() {
    let l1X = getRndInteger(1, 4);
    let l1Size = getRndInteger(6,10-l1X);

    let layer = 8 - getRndInteger(0,4);
    for(let i = l1X; i < (l1X+l1Size); i++) {
        let rect = document.getElementById(`x${i}y${layer}`);
        rect.setAttribute("style", `animation: box4 10s linear ${layer*100}ms;`);
    }

    layer--;
    let left = getRndInteger(1,3);
    let right = getRndInteger(1,3);
    let l2X = l1X + left;
    let l2Size = l1Size-left-right;
    for(let i = l2X; i < (l2X+l2Size); i++) {
        let rect = document.getElementById(`x${i}y${layer}`);
        rect.setAttribute("style", `animation: box4 10s linear ${layer*100}ms;`);
    }

    layer--;
    left = getRndInteger(1,3);
    right = getRndInteger(1,3);
    let l3X = l2X + left;
    let l3Size = l2Size-left-right;
    l3Size = l3Size <= 0 ? 1 : l3Size;
    for(let i = l3X; i < (l3X+l3Size); i++) {
        let rect = document.getElementById(`x${i}y${layer}`);
        rect.setAttribute("style", `animation: box4 10s linear ${layer*100}ms;`);
    }
}

function createGridAnimation_InsideOut() {

    for(let i = 0; i < 10; i++) {
        for(let j = 0; j < 10; j++) {
            let rect = document.getElementById("x" + i + "y" + j);                        
            rect.setAttribute("class", "");
        }
    }

    let luX, luY, ruX, ruY, rdX, rdY, ldX, ldY;
    luX = getRndInteger(3, 6);
    luY = getRndInteger(3, 6);
    ruX = luX + 2;
    ruY = luY;
    rdX = ruX;
    rdY = ruY + 2;
    ldX = luX;
    ldY = rdY;    

    for(let i = luX; i < ruX; i++) {
        for(let j = luY; j < ldY; j++) {
            let rect = document.getElementById("x" + i + "y" + j);                        
            rect.setAttribute("class", "box1");
        }
    }

    for(let i = luX-1; i < ruX+1; i++) {
        for(let j = luY-1; j < ldY+1; j++) {
            let rect = document.getElementById("x" + i + "y" + j);         
            if(rect.getAttribute("class") != "box1") {
                rect.setAttribute("class", "box2");
            }            
        }
    }    
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }


