import ClinicalTrialStructure from "../../../common/src/clinicalTrial/models/clinicalTrial";

export class ClinicalTrialDecorator {
    clinicalTrial: ClinicalTrialStructure;
    countryCode: string;

    constructor(clinicalTrial: ClinicalTrialStructure, countryCode: string){
        this.clinicalTrial = clinicalTrial
        this.countryCode =  countryCode;
    }

    public output(): string {  
        return `${this.clinicalTrial.name}, ${this.countryCode}`;
    }
}