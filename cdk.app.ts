import * as cdk from '@aws-cdk/core'
import { StackA } from './stack-a'
import { StackB } from './stack-b'

const app = new cdk.App()

new StackA(app)
new StackB(app)
