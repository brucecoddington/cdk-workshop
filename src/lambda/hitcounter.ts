import { Handler } from "aws-lambda";
import { DynamoDB, Lambda } from "aws-sdk";

export const handler: Handler = async function(event) {
  console.log("request:", JSON.stringify(event, undefined, 2));

  const ddb = new DynamoDB();
  const lambda = new Lambda();

  await ddb
    .updateItem({
      TableName: process.env.HITS_TABLE_NAME as any,
      Key: { path: { S: event.path } },
      UpdateExpression: "ADD hits :incr",
      ExpressionAttributeValues: { ":incr": { N: "1" } }
    })
    .promise();

  const response = await lambda
    .invoke({
      FunctionName: process.env.DOWNSTREAM_FUNCTION_NAME as any,
      Payload: JSON.stringify(event)
    })
    .promise();

  console.log("downstream response:", JSON.stringify(response, undefined, 2));

  return JSON.parse(response.Payload as any);
};
