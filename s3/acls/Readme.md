# create new bucket
export AWS_ACCESS_KEY_ID="你的AccessKey"
export AWS_SECRET_ACCESS_KEY="你的SecretKey"
aws s3api create-bucket --bucket acl-example-ab-0520 --region us-east-1

# turn off block public access for ACL
aws s3api put-public-access-block --bucket acl-example-ab-0520 --public-access-block-configuration "BlockPublicAcls=false,IgnorePublicAcls=false,BlockPublicPolicy=true,RestrictPublicBuckets=true"

aws s3api get-public-access-block --bucket acl-example-ab-0520 

# change bucket ownership
aws s3api put-bucket-ownership-controls \
--bucket acl-example-ab-0520 \
--ownership-controls="Rules=[{ObjectOwnership=BucketOwnerPreferred}]"

# change ACL for account to a user in another AWS account
aws s3api put-bucket-acl --bucket acl-example-ab-0520 --access-control-policy file:///workspaces/AWS-example/s3/acls/policy.json

# Access bucket from other account
touch bootcamp.txt
aws s3 cp bootcamp.txt s3://acl-example-ab-0520
aws s3 ls s3://acl-example-ab-0520

# cleanup
aws s3 rb s3://acl-example-ab-0520