import { fetchCountryByCode } from "../../../../../packages/cli/src/country/services/fetchCountryByCode";

describe('testing fetchCountryByCode file', () => {
  
    test('a country with matching code should be returned', () => {

      expect(fetchCountryByCode("fr")).toBeDefined();
      expect(fetchCountryByCode("fr")!.code).toBe("FR");
    });

    test('a country without matching code should be filtered out', () => {

      expect(fetchCountryByCode("xx")).toBeUndefined();
    });
});