---
---

// variable for the namespace 
const svgns = "http://www.w3.org/2000/svg";

// targeting the svg itself
const svg = document.querySelector(".header-bg svg");


let opacities = [ 0.0, 0.05, 0.1, 0.15 ];
// let opacities = [ 0.0, 0.025, 0.05, 0.075 ];
// let opacities = [ 0.025, 0.05, 0.075, 0.1, 0.125, 0.15, 0.175, 0.20, 0.225, 0.25 ];

for(let i = 0; i < 10; i++) {
    for(let j = 0; j < 10; j++) {
        let newRect = document.createElementNS(svgns, "rect");
        newRect.setAttribute("x", "" + i*10 + "%");
        newRect.setAttribute("y", "" + j*10 + "%");
        newRect.setAttribute("width", "10%");
        newRect.setAttribute("height", "10%");
        newRect.setAttribute("fill", "#ffffff");
        newRect.setAttribute("opacity", "" + opacities[getRndInteger(0, 4)]);
        
        newRect.setAttribute("id", "x" + i + "y" + j);        
        svg.appendChild(newRect);                
    }   
}
getGridMapping();

function getGridMapping() {


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


    // let level = 1;
    // let box = 1;
    // for(let i = 0; i < 3; i++) {  
    //     box = 1;
    //     for(let j = 0; j < 3; j++) {
    //         let rect = document.getElementById("x" + i + "y" + j);                        
    //         rect.setAttribute("class", "l" + level + "b" + box);
    //     }   
    //     box = 2;
    //     for(let j = 3; j < 6; j++) {
    //         let rect = document.getElementById("x" + i + "y" + j);                        
    //         rect.setAttribute("class", "l" + level + "b" + box);
    //     }   
    //     box = 2;
    //     for(let j = 6; j < 10; j++) {
    //         let rect = document.getElementById("x" + i + "y" + j);                        
    //         rect.setAttribute("class", "l" + level + "b" + box);
    //     }   
    // }
    
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }


