# HelloWorld Golang code deployed through GitHub Actions via CDK on typescript and AWS Lambda invoked via one GET ApiGateway Endpoint

Steps:
Set up node.js v20
Set up Golang v1.22.2
Perform CDK init
Create main.go with the lambda function
Go mod init and go mod tidy performed into lambda folder
Build Go app, zip it into hello.zip. (done in github/workflow/actions.yml)
Install aws-cdk, aws-cdk-lib, and ts-node node packages
Run cdk diff if there's any change it runs cdk deploy
