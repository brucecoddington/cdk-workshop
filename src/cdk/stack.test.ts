import { expect as expectCDK, haveResource } from "@aws-cdk/assert";
import * as cdk from "@aws-cdk/core";

import { CdkWorkshopStack } from "./stack";

test("Lambda Created", () => {
  const app = new cdk.App();
  // WHEN
  const stack = new CdkWorkshopStack(app, "MyTestStack");
  // THEN
  expectCDK(stack).to(haveResource("AWS::Lambda::Function"));
});
