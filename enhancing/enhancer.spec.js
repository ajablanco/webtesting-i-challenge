const {repair, succeed, fail, get}  = require('./enhancer.js');
// test away!

describe("enhancer.js", function() {
    describe("repair()", function() {
        it('should return 100', function() {
            const item = { 
                name:"Aja",
                enhancement: 10,
                durability:95 
            };
            const expected = {
                name:"Aja",
                enhancement: 10,
                durability:100
            };

            expect(repair(item)).toEqual(expected);
        })
    })
    describe("succeed()", function() {
        it('should return a new item modified accordingly', function() {
            const item = {
                name: "Aja",
                enhancement: 1,
                durability: 90 
            }

            const expected = {
                name: "Aja",
                enhancement: 2,
                durability: 100
            }

            expect(succeed(item)).toEqual(expected);
        })
    })
    describe("fail()", function() {
        it('should decrease durability by 5', function() {
            const item = {
                name: 'aja',
                enhancement: 14,
                durability: 100
            }
            const expected = {
                name: 'aja',
                enhancement: 14,
                durability: 95
            }
            expect(fail(item)).toEqual(expected);
        })
    })
    describe("fail()", function() {
        it('should decreases durability by 10', function() {
            const item = {
                name: 'aja',
                enhancement: 15,
                durability: 100
            }
            const expected = {
                name: 'aja',
                enhancement: 15,
                durability: 90
            }
            expect(fail(item)).toEqual(expected);
        })
    })
    describe("fail()", function() {
        it('should decrease enhancement by 1', function() {
            const item = {
                name: 'aja',
                enhancement: 18,
                durability: 100
            }
            const expected = {
                name: 'aja',
                enhancement: 17,
                durability: 90
            }
            expect(fail(item)).toEqual(expected);
        })
    })
    describe("get()", function() {
        it('should return just the name test', function() {
            const item = {
                name: 'test',
                enhancement: 0,
                durability: 100
            }
            const expected = {
                name: 'test',
                enhancement: 0,
                durability: 100
            }
            expect(get(item)).toEqual(expected.name);
        })
    })
    describe("get()", function() {
        it('should look like [enhancement +] Aja', function() {
            const item = {
                name: 'aja',
                enhancement: 70,
                durability: 100
            }
            const name = `[${item.enhancement}+] ${item.name}`
            expect(get(item)).toEqual(name);
        })
    })
})