import json_data from "../../../../../countries.json";
import { plainToInstance } from "class-transformer";
import Country from "../models/country";

export const fetchAll = json_data.map( (json_item) => {
    return plainToInstance(Country, json_item)
})