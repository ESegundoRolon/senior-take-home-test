import Country from "../../../packages/cli/src/country/models/country";

const defaultCountry: Country = {
    name: "France",
    code: "FR"
  }
  
  export const createMockCountry = (overwrites: Partial<Country> = {}) => ({
    ...defaultCountry,
    ...overwrites
  });
