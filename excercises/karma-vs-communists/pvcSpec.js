describe("Party Constructor", function (){
    var newParty; 
    beforeEach(function () {
         newParty = new Party("testParty", 1000);
    });
    it("should set the population correctly", function() {
        expect(newParty.population).toBe(1000);
    });
    it("should set the name correctly", function() {
        expect(newParty.name).toBe("testParty")
    });
});

describe("Party array and generate funciton", function() {
    var parties;
    beforeEach(function(){
        parties = getParty(commies, bourgeoisie);
    });
    
    it("should return an array with length 2", function() {
        expect(parties.length).toBe(2);
    });
    it("should have a name and population property for first party object", function(){
        expect(parties[0].name).toBeDefined();
        expect(parties[0].population).toBeDefined();
    });
    it("should have a name and population property for second party object", function(){
        expect(parties[1].name).toBeDefined();
        expect(parties[1].population).toBeDefined();
    });
    
});

describe("onHit Function", function() {
    
    
});

describe("onMiss Function", function() {
    
    
    
});

describe("sendNuke Function" function() {
    
    
    
});

describe("runSimulation Function", function() {
    
    
    
});