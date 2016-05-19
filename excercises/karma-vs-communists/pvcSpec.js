describe("Party Constructor", function () {
    var newParty;
    beforeEach(function () {
        newParty = new Party("testParty", 1000);
    });
    it("should set the population correctly", function () {
        expect(newParty.population).toBe(1000);
    });
    it("should set the name correctly", function () {
        expect(newParty.name).toBe("testParty")
    });
});

describe("Party array and generate funciton", function () {
    var parties;
    beforeEach(function () {
        parties = getParty(commies, bourgeoisie);
    });

    it("should return an array with length 2", function () {
        expect(parties.length).toBe(2);
    });
    it("should have a name and population property for first party object", function () {
        expect(parties[0].name).toBeDefined();
        expect(parties[0].population).toBeDefined();
    });
    it("should have a name and population property for second party object", function () {
        expect(parties[1].name).toBeDefined();
        expect(parties[1].population).toBeDefined();
    });

});

describe("onHit Function", function () {
    var parties;
    var testPop0;
    var testPop1;
    beforeEach(function () {
        parties = getParty(commies, bourgeoisie);
        testPop0 = parties[0].population;
        testPop1 = parties[1].population;
        spyOn(console, 'log');
        onHit(parties, 1, 0);
    });
    it("should reduce the population of the party at the index of the third parameter", function () {
        expect(testPop0).toBeGreaterThan(parties[0].population);
    })
    it("should leave the population of the party the the index of the second parameter unchanged", function () {
        expect(testPop1).toBe(parties[1].population);
    });
    it("should be console logging a message", function () {
        expect(console.log).toHaveBeenCalled();
    });

});

describe("onMiss Function", function () {
    var parties;
    var testPop0;
    var testPop1;
    beforeEach(function () {
        parties = getParty(commies, bourgeoisie);
        testPop0 = parties[0].population;
        testPop1 = parties[1].population;
        spyOn(console, 'log');
        onMiss(parties, 1, 0);
    });
    it("should leave the population of the party at the index of the third parameter unchanged", function () {
        expect(testPop0).toBe(parties[0].population);
    })
    it("should leave the population of the party the the index of the second parameter unchanged", function () {
        expect(testPop1).toBe(parties[1].population);
    });
    it("should be console logging a message", function () {
        expect(console.log).toHaveBeenCalled();
    });
});

describe("sendNuke Function", function () {

    it("Should call onHit if roll is < 6", function () {
        spyOn(window, 'onHit')

        function roll() {
            return 5
        }
        sendNuke(party, roll, onHit, onMiss, 0, 1);
        expect(window.onHit).toHaveBeenCalled();
    })
    it("Should call onMiss if roll is >= 6", function () {
        spyOn(window, 'onMiss')

        function roll() {
            return 6
        }
        sendNuke(party, roll, onHit, onMiss, 0, 1);
        expect(window.onMiss).toHaveBeenCalled();
    });
    it("Shouldn't call onMiss if roll is < 6", function () {
        spyOn(window, 'onMiss')

        function roll() {
            return 5
        }
        sendNuke(party, roll, onHit, onMiss, 0, 1);
        expect(window.onMiss).not.toHaveBeenCalled();
    })
    it("Shouldn't call onHit if roll is >= 6", function () {
        spyOn(window, 'onHit')

        function roll() {
            return 6
        }
        sendNuke(party, roll, onHit, onMiss, 0, 1);
        expect(window.onHit).not.toHaveBeenCalled();
    });
});

describe("runSimulation Function", function () {

    //Failed
    it("Should console.log if population A <= 0", function () {
        party[0].population = 0
        party[1].population = 1
        spyOn(console, 'log');
        runSimulation();
        expect(console.log).toHaveBeenCalled();
    });
    
    //Failed
    it("Should console.log if population B <= 0", function () {
        party[0].population = 1
        party[1].population = 0
        spyOn(console, 'log');
        runSimulation();
        expect(console.log).toHaveBeenCalled();
    });
    it("Should not console.log if both populations > 0", function () {
        party[0].population = 1
        party[1].population = 1
        spyOn(console, 'log');
        runSimulation();
        expect(console.log).not.toHaveBeenCalled();
    });
    
    //Failed
    it("Should call sendNuke if both populations > 0", function () {
        party[0].population = 1
        party[1].population = 1
        spyOn(window, 'sendNuke');
        runSimulation();
        expect(window.sendNuke).toHaveBeenCalled();
    });
    it("Should call runSimulation if both populations > 0", function () {
        party[0].population = 1
        party[1].population = 1
        spyOn(window, 'runSimulation');
        runSimulation();
        expect(window.runSimulation).toHaveBeenCalled();
    });
    it("Should not call sendNuke if population A <= 0", function () {
        party[0].population = 0
        party[1].population = 1
        spyOn(window, 'sendNuke');
        runSimulation();
        expect(window.sendNuke).not.toHaveBeenCalled();
    });
    it("Should not call sendNuke if population B <= 0", function () {
        party[0].population = 1
        party[1].population = 0
        spyOn(window, 'sendNuke');
        runSimulation();
        expect(window.sendNuke).not.toHaveBeenCalled();
    });
//    it("Should not call runSimulation if population A <= 0", function () {
//        party[0].population = 0
//        party[1].population = 1
//        spyOn(window, 'runSimulation');
//        runSimulation();
//        expect(window.runSimulation).not.toHaveBeenCalled();
//    });
//
//    it("Should not call runSimulation if population  <= 0", function () {
//        party[0].population = 1
//        party[1].population = 0
//        spyOn(window, 'runSimulation');
//        runSimulation();
//        expect(window.runSimulation).not.toHaveBeenCalled();
//    });
});