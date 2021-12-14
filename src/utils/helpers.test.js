import { Calc } from "./helpers";

describe("Calculation", () => {
  it("when the user asks 300 000 loan to buy new equipment for 30 months, the interest rate = 5%", () => {
    const userData = {
      product: "Mortage",
      legal: "Home Owner",
      amount: 300000,
      duration: 30,
      maxAmount: 500,
      maxDuration: 60,
    };

    console.log({ userData });
    const offer = new Calc(userData);

    expect(offer.calcInterestRate()).toEqual(5);
    expect(offer.getMinRate()).toEqual(4);
    expect(offer.getMaxRate()).toEqual(6);
  });

  it("when the user asks 55000 loan to buy new equipment for 30 months, the interest rate = 5,26%", () => {
    const userData = {
      product: "Business Loan",
      legal: "Business Owner",
      amount: 55000,
      duration: 8,
      maxAmount: 500,
      maxDuration: 60,
    };

    console.log({ userData });
    const offer = new Calc(userData);

    expect(offer.calcInterestRate()).toEqual(5.26);
    expect(offer.getMinRate()).toEqual(5);
    expect(offer.getMaxRate()).toEqual(7);
  });

  it("when the user asks 185000 loan to buy new equipment for 28 months, the interest rate = 4,93%", () => {
    const userData = {
      product: "Farm Equipment",
      legal: "Farm Owner",
      amount: 185000,
      duration: 28,
      maxAmount: 250,
      maxDuration: 60,
    };

    console.log({ userData });
    const offer = new Calc(userData);

    expect(offer.calcInterestRate()).toEqual(4.93);
    expect(offer.getMinRate()).toEqual(4);
    expect(offer.getMaxRate()).toEqual(6);
  });

  it("minRate and MaxRate calculate correctly", () => {
    const userData1 = {
      product: "Shop",
      legal: "Shop Owner",
      amount: 250000,
      duration: 36,
      maxAmount: 250000,
      maxDuration: 36,
    };

    const userData2 = {
      product: "Home Owner",
      legal: "First Home",
      amount: 100000,
      duration: 20,
      maxAmount: 250000,
      maxDuration: 36,
    };

    const userData3 = {
      product: "Business Owner",
      legal: "Firsrt Business",
      amount: 45000,
      duration: 12,
      maxAmount: 250000,
      maxDuration: 36,
    };

    const userData4 = {
      product: "Farm Owner",
      legal: "First Farm",
      amount: 5000,
      duration: 3,
      maxAmount: 250000,
      maxDuration: 36,
    };

    console.log({ userData1 });
    const offer1 = new Calc(userData1);

    console.log({ userData2 });
    const offer2 = new Calc(userData2);

    console.log({ userData3 });
    const offer3 = new Calc(userData3);

    console.log({ userData4 });
    const offer4 = new Calc(userData4);

    expect(offer1.getMinRate()).toEqual(4);
    expect(offer1.getMaxRate()).toEqual(6);

    expect(offer2.getMinRate()).toEqual(5);
    expect(offer2.getMaxRate()).toEqual(7);

    expect(offer3.getMinRate()).toEqual(6);
    expect(offer3.getMaxRate()).toEqual(8);

    expect(offer4.getMinRate()).toEqual(6);
    expect(offer4.getMaxRate()).toEqual(8);
  });
});
