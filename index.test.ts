import { arrayMean, affordableHousing, evenEven, makeSentences } from "./index";

describe("arrayMean", () => {
    it("works", () => {
        expect(arrayMean([1, 2, 3])).toEqual(0);
    });
    it("doesn't work", () => {
        expect(arrayMean([1, 2, 3])).not.toEqual(1);
    });
});

describe("affordableHousing", () => {
    it("works", () => {
        expect(
            affordableHousing(
                [
                    { id: "1", rent: 500 },
                    { id: "2", rent: 600 },
                    { id: "3", rent: 700 },
                ],
                600
            )
        ).toEqual(["Hello", "World"]);
    });
});

describe("evenEven", () => {
    it("works", () => {
        expect(evenEven()).toEqual(false);
    });
});

describe("makeSentences", () => {
    it("works", () => {
        expect(
            makeSentences([
                { name: "Fido", age: 3 },
                { name: "Spot", age: 5 },
            ])
        ).toEqual(["Hello", "World"]);
    });
});
