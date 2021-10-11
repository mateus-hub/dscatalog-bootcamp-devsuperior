import { formatPrice } from "util/formatters";

// test('formatPrice should format number pt-BR when given 10.1', () => {
//   // ARRANGE
//   const value = 10.1;
//   //ACT
//   const result = formatPrice(value);
//   //ASSERT
//   expect(result).toEqual("10,10");
// });

describe("formatPrice for non-positive numbers", () => {
  test("should format number pt-BR when given 0", () => {
    const result = formatPrice(0);
    expect(result).toEqual("0,00");
  });

  test("should format number pt-BR when given -5,1", () => {
    const result = formatPrice(-5.1);
    expect(result).toEqual("-5,10");
  });
});
