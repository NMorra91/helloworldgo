import * as cdk from 'aws-cdk-lib/core';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';

export class LambdaCdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Lambda Function
    const helloLambda = new lambda.Function(this, 'HelloHandler', {
      runtime: lambda.Runtime.PROVIDED_AL2,
      code: lambda.Code.fromAsset('./lambda/hello.zip'),
      handler: 'bootstrap',
    });

    // API Gateway
    const api = new apigateway.RestApi(this, 'HelloApi', {
      restApiName: 'Hello API',
    });

    const integration = new apigateway.LambdaIntegration(helloLambda);

    const helloResource = api.root.addResource('hello');
    helloResource.addMethod('GET', integration);
  }
}

const app = new cdk.App();
new LambdaCdkStack(app, 'LambdaCdkStack');
