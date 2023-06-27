
import { fetchAll } from "../commands/fetchAll";
import { fetchByCode } from "../commands/fetchByCode";

export const fetchCountryByCode = (code: string) => {
    const countries = fetchAll;
    return fetchByCode(countries, code)
}