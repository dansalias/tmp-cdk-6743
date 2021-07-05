import * as path from 'path'
import * as cdk from '@aws-cdk/core'
import * as lambda from '@aws-cdk/aws-lambda'

export class StackA extends cdk.Stack {
  constructor(scope: cdk.App) {
    super(scope, 'StackA', {
      env: {
        region: process.env.AWS_DEFAULT_REGION,
        account: process.env.AWS_ACCOUNT_ID,
      },
    })

    new lambda.Function(this, 'LambdaA', {
      runtime: lambda.Runtime.NODEJS_14_X,
      handler: 'index.handler',
      code: lambda.Code.fromAsset(path.join(__dirname, 'lambda-a')),
    })
  }
}
