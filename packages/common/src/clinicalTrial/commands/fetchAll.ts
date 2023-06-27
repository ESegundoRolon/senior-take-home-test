import jsonData from "../../../../../trials.json";
import { plainToInstance } from "class-transformer";
import  ClinicalTrialStructure  from "../models/clinicalTrial";

export const fetchAll = jsonData.map( (jsonItem) => {
    return plainToInstance(ClinicalTrialStructure, jsonItem)
})