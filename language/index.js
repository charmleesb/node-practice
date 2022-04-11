import { franc, francAll } from 'franc'
import langs from 'langs/index.js'
import colors from 'colors'

const code = franc(process.argv[2]);
if (code === 'und') {
    console.log("SORRY, COULDN'T FIGURE IT OUT! TRY WITH MORE SIMPLE TEXT".red);
} else {
    const language = langs.where("3", code).name;
    console.log(`Our best guess is: ${language}`.green);
}