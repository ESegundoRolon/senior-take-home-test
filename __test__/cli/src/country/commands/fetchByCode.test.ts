import { fetchByCode } from "../../../../../packages/cli/src/country/commands/fetchByCode";
import { createMockCountry } from "../../../../factories/country/createMockCountry";

describe('testing fetchByCode file', () => {
  
    test('a country with matching code should be returned', () => {
      const country = createMockCountry({code: "FR"});

      const result = fetchByCode([country], "fr");

      expect(result).toBeDefined();
      expect(result).toStrictEqual(country);
    });

    test('a country without matching code should be filtered out', () => {
      const country = createMockCountry({code: "ES"});

      expect(fetchByCode([country], "fr")).toBeUndefined();
    });
});