const API_HeroList = require("./API_HeroList")
// @ponicode
describe("API_HeroList.urlProfileHero", () => {
    test("0", () => {
        let callFunction = () => {
            API_HeroList.urlProfileHero(9876)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            API_HeroList.urlProfileHero("c466a48309794261b64a4f02cfcc3d64")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            API_HeroList.urlProfileHero("da7588892")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            API_HeroList.urlProfileHero("bc23a9d531064583ace8f67dad60f6bb")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            API_HeroList.urlProfileHero(12345)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            API_HeroList.urlProfileHero(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("API_HeroList.urlUpdateProfileHero", () => {
    test("0", () => {
        let callFunction = () => {
            API_HeroList.urlUpdateProfileHero("bc23a9d531064583ace8f67dad60f6bb")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            API_HeroList.urlUpdateProfileHero(12345)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            API_HeroList.urlUpdateProfileHero("c466a48309794261b64a4f02cfcc3d64")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            API_HeroList.urlUpdateProfileHero(9876)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            API_HeroList.urlUpdateProfileHero("da7588892")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            API_HeroList.urlUpdateProfileHero(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
