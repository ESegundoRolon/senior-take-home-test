import { fetchClinicalTrialsByCountry, fetchAllClinicalTrials } from "../../../common/src/clinicalTrial/services";
import { fetchCountryByCode } from "../country/services/fetchCountryByCode";
import { ClinicalTrialDecorator } from "../outputDecorator/clinicalTrialDecorator";


export const listClinicalTrialsByCountry =(countryCode: string) => {
    
    const country = fetchCountryByCode(countryCode);

    if(!country){
        console.error(`The country code ${countryCode} it's not recognized in our countries database, try another country code`);
        return;
    }

    const validatedCountryCode = country!.code!;

    const clinicalTrials = fetchAllClinicalTrials();
    const results = fetchClinicalTrialsByCountry(clinicalTrials, validatedCountryCode);

    const countryName = country!.name!
    results.map(result=> {
        const outputDecorator = new ClinicalTrialDecorator(result, countryName)
        console.log(outputDecorator.output())
    })
}