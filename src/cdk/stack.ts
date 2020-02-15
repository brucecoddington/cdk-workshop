import * as apigw from "@aws-cdk/aws-apigateway";
import * as lambda from "@aws-cdk/aws-lambda";
import * as cdk from "@aws-cdk/core";
import { TableViewer } from "cdk-dynamo-table-viewer";

import { HitCounter } from "./hitcounter";

export class CdkWorkshopStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const hello = new lambda.Function(this, "HelloHandler", {
      runtime: lambda.Runtime.NODEJS_12_X,
      code: lambda.Code.fromAsset("src/lambda"),
      handler: "hello.handler"
    });

    const helloHitCounter = new HitCounter(this, "HelloHitCounter", {
      downstream: hello
    });

    new apigw.LambdaRestApi(this, "Endpoint", {
      handler: helloHitCounter.handler
    });

    new TableViewer(this, "ViewHitCounter", {
      title: "Hello Hits",
      table: helloHitCounter.table
    });
  }
}
