describe("Calculator", function() {
   
    it("should add two numbers together", function() {
        var sum = add(1, 2);
        expect(sum).toBe(3);
        
    });
    
    it("should subract the second number from the first", function() {
        var difference = subtract(4, 3);
        expect(difference).toBe(1);
    });
    
    it("should multiply two numbers", function() {
        var product = multiply(2, 4);
        expect(product).toBe(8);
    });
    
    it("should divide the second number into the first", function() {
        var quotient = divide(6, 2);
        expect(quotient).toBe(3);
    });
    
    it("should return 0 if divisor is 0", function() {
       var quotient = divide(3, 0);
        expect(quotient).toBe(0);
    });
});