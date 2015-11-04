function Flower(color, petals, smellsPretty, stemLength, origin, sex){
    this.color = color;
    this.petals = petals;
    this.smellsPretty= smellsPretty;
    this.stemLength = stemLength;
    this.origin = origin;
    this.sex = sex;
    this.sniff = function(){
        console.log("Sniff Sniff Sniff!");
    };
    // Demonstrates use of arguments with methods
    this.smellsGood = function(answer) {
        if (answer) {
            return 'This flower smells amazing!';
        } else {
            return 'What a noxious weed!';
        }
    };
    // Demonstrates use of local object variables
    this.describe = function(answer) {
        alert("This flower is " + this.color + ".");
      };
    /// Demonstrates object to object interaction
    this.compare =  function(otherFlower) {
        return("My " + this.color + " flower is much prettier than your " +
          otherFlower.color + " flower :P");
    };
    this.render = function() {
        $('body').append("<p>My pretty flower is " + this.color +
          " and has " + this.petals + " pristine petals.</p>");
    };
    this.crossPollinate = function(flowerB) {
        if ((this.sex === "female") && (flowerB.sex === "male")){
            var new_color = this.color + "-" + flowerB.color;
            var new_petals = ((this.petals + flowerB.petals) / 2);
            var new_smellsPretty = (this.smellsPretty && flowerB.smellsPretty);
            var new_stemLength = ((this.stemLength + flowerB.stemLength) / 2);
            var new_origin = (.49 < Math.random()) ? this.origin : flowerB.origin;
            var new_sex = (.49 > Math.random()) ? this.sex : flowerB.sex;
            var childFlower = new Flower(new_color, new_petals, new_smellsPretty, new_stemLength, new_origin, new_sex);
            console.log(childFlower);
        } else {
            console.log("Need one female and one male to reproduce. ex: femaleFlower.crossPolinate(maleFlower).");
        }
    };
}

var stanleyFlower = new Flower("green", 17, false, 9, "Michigan", "female");
var erinFlower = new Flower("blue", 23, true, 7, "Wisconsin", "female");

erinFlower.crossPollinate(stanleyFlower);

