#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { MyS3Stack } from '../lib/cdk-stack';

const app = new cdk.App();
new MyS3Stack(app, 'MyS3StackUniqueId');
