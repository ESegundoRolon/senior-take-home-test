
import Country from "../models/country";

export const fetchByCode = (countries: Array<Country>, code: string) => countries.find((country: Country)=>{
    return country.code.toLowerCase() === code.toLowerCase()
})