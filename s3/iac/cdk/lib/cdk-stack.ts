import * as cdk from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';
//import { Stack, StackProps } from 'aws-cdk-lib/core';
//import * as subs from 'aws-cdk-lib/aws-sns-subscriptions';
//import * as sqs from 'aws-cdk-lib/aws-sqs';

export class MyS3Stack extends cdk.Stack {
  // 將 StackProps 改為 cdk.StackProps
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

      new s3.Bucket(this, 'MyBucket');
  }
}
