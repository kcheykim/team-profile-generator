const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    describe('getName', () => {
        test('this should return an Engineer name', () => {
            const str = 'Diane';
            const result = new Engineer(str, '123', 'diane@', 'diane@github').getName()
            expect(result).toBe(str);
        })
    })

    describe('getId', () => {
        test('this should return an Engineer id', () => {
            const str = '123';
            const result = new Engineer('Diane', str, 'diane@email', 'diane@github').getId();
            expect(result).toEqual(str);
        })
    })

    describe('getEmail', () => {
        test('this should return email address', () => {
            const str = 'diane@email';
            const result = new Engineer('Diane', '123', str, 'diane@github').getEmail();
            expect(result).toEqual(str);
        })
    })

    describe("getRole", () => {
        test("this should return the role of the Engineer", () => {
            const role = "Engineer";
            const result = new Engineer('Diane', '123', 'diane@email', 'diane@github').getRole();
            expect(result).toEqual(role);
        });
    });

    describe("gitHub", () => {
        test("this should return the role of the Engineer", () => {
            const str = 'diane@github';
            const result = new Engineer('Diane', '123', 'diane@email', str).getGithub();
            expect(result).toEqual(str);
        });
    });
});