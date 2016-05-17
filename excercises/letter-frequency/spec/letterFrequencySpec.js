describe("frequency", function() {
    
    it("should return an object with the frequency of every letter in the input phrase", function() {
        var frequency = getFrequency("mississippi");
        var test = {
            "m": 1,
            "i": 4,
            "s": 4,
            "p": 2
            
        };
        expect(frequency).toBe(test);
    });
    
    it("should return a string with non-repeated letters and only the first iteration of repeated letters", function() {
        var noDuplicate = noDupes("slimy smelly solution");
        expect(noDuplicate).toBe("slimy eoutn");
    })
    
    it("should return an object with the same key value pairs sorted in decending order of thier values", function() {
        var sorted = sortFrequency("mississippi");
        var test = {
            "s": 4,
            "i": 4,
            "p": 2,
            "m": 1
            
        };
        expect(sorted).toBe(test);
    });
//
// Not my tests
//
    it("should return an object", function () {
        var freqObj = getFrequency("a");
        expect(freqObj).toBeDefined();
    });

    it("should populate the keys with the letters", function () {
        var freqObj = getFrequency("abc");
        expect(freqObj.hasOwnProperty("a")).toBe(true);
        expect(freqObj.hasOwnProperty("b")).toBe(true);
        expect(freqObj.hasOwnProperty("c")).toBe(true);
    });

    it("should set new keys to a count of 1", function () {
        var freqObj = getFrequency("ab");
        expect(freqObj.a).toBe(1);
        expect(freqObj.b).toBe(1);
    });
    
    it("should increment existing keys", function() {
        var freqObj = getFrequency("aaaabbc");
        expect(freqObj.a).toBe(4);
        expect(freqObj.b).toBe(2);
        expect(freqObj.c).toBe(1);
    });
    
});