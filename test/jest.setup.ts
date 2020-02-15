import { JUnitXmlReporter } from "jasmine-reporters";
import "jest-dynalite/dist/setupTables";
import "jest-dynalite/dist/clearAfterEach";

declare var jasmine: any;

jasmine.VERBOSE = true;

const reporter = new JUnitXmlReporter({
  savePath: ".jest/junit",
  consolidateAll: false
});

jasmine.getEnv().addReporter(reporter);
