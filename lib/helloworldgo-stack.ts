import * as cdk from 'aws-cdk-lib/core';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import * as lambdaNodeJs from 'aws-cdk-lib/aws-lambda-nodejs';
import { Construct } from 'constructs';

export class LambdaCdkStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Lambda Function
    const helloLambda = new lambdaNodeJs.NodejsFunction(this, 'HelloLambda', {
      entry: '..lambda/main.go', // Path to your GoLang code
      handler: 'main',
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
