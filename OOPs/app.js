/* sabke prototype hote   _proto_ (yeh property h reference(=== true aiga)) is a template object jiska every obj access kr skte h ... array ke pass push pop nhi h proto + data entered h 
proto meh sab(methods) h 
String.prototype yeh actual obj h 
Array.prototype.newFxn = () => {} ab yeh newFxn prototype meh ajaiga
variable direct return karlo string meh krna h toh backtick ${} wale tareke seh krlo
*/

String.prototype.pug = () => {
	console.log("i'm a pug");
	return `OMG!! ${this.toUpperCase()} !!! AGAGAG`; //this refers to yeh wali string
};

//oops

/* class instance obj then method call krlo
 */

// 1) factory Funtion yeh fxn hamareliye obj bna rha h

function makeColor(r, g, b) {
	const color = {}; //obj
	color.r = r;
	color.g = g;
	color.b = b;
	color.rgb = () => {
		//obj meh fxn bnake add kiya
		const { r, g, b } = this; //defezctoring
		return "rgb(${r},${g},${b})";
	};
	return color; //obj return krdiya
}

// 2) Constructor Funtion yeh  khud seh obj bn rha

function Color(r, g, b) {
	this.r = r;
	this.g = g;
	this.b = b;

	//ISSE PROTOTYPE MEH ADD NHI HOGA yeh factory jaisa hogya ismeh prototype meh nhi jaiga
	// this.rgb = () => {
	// 	const { r, g, b } = this; //defezctoring
	// 	return "rgb(${r},${g},${b})";
	// };
}

//prototype meh reference same aigi ==== true aiga coz prototype same h

Color.prototype.rgb = function () {
	const { r, g, b } = this; //defezctoring
	return "rgb(${r},${g},${b})";
};
// new Color(10, 22, 35); new keyword use krna h

// 3) class syntax

class Color {
	constructor(r, g, b) {
		//mandatory to make
		this.r = r;
		this.g = g;
		this.b = b;
	}
	rgb() {
		//ismeh prototype meh add jake nhi krna padh rha direct ho rha h
		const { r, g, b } = this; //defezctoring
		return "rgb(${r},${g},${b})";
	}
}

// new Color(10, 22, 35); new keyword use krna h

// 4) Extend and super keyword

// childClass extends parentClass
// constructor bnao na bnao extend krke marzi .. agr bnaya toh if you want parent ke .. toh use super keyword super(__, apna bhi add kr skte variable == 9 for eg 9 krke ya kuch bhi); call krdo inside constructor
