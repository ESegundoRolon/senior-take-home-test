import { listClinicalTrialsByCountry } from "./actions/listClinicalTrialsByCountry";

const { Command } = require("commander"); // add this line
const figlet = require("figlet");

const program = new Command();

program
  .version("1.0.0")
  .description("An example CLI for querying clinical trials at Inato")
  .option("-c, --cc  <value>", "List clinical trials by country")
  .parse(process.argv);

const options = program.opts();

console.log(figlet.textSync("Inato CLI"));

if(options.cc){

  listClinicalTrialsByCountry(options.cc);

}