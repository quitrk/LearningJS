/*
    Numbers 04. Find Cost of Tile to Cover W x H Floor - Calculate the total cost of tile it would take to cover a floor plan of width and height, using a cost entered by the user.
*/

var getCost = function (sqFtCost, floorWidth, floorHeight) {
    "use strict";

    return "The total cost is $" + sqFtCost * floorWidth * floorHeight + " for " + floorWidth * floorHeight + " square feet";
};

this.console.log(getCost(30, 5, 6));