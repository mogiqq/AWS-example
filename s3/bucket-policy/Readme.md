# create bucket
export AWS_ACCESS_KEY_ID="你的AccessKey"
export AWS_SECRET_ACCESS_KEY="你的SecretKey"
aws s3 mb s3://bucket-policy-example-ab-0521

# create bucket policy
aws s3api put-bucket-policy --bucket bucket-policy-example-ab-0521 --policy file://policy.json

# in the other account access the bucket
touch bootcamp.txt
aws s3 cp bootcamp.txt s3://bucket-policy-example-ab-0521
aws s3 ls s3://bucket-policy-example-ab-0521 

# clearup
aws s3 rm s3://bucket-policy-example-ab-0521/bootcamp.txt
aws s3 rb s3://bucket-policy-example-ab-0521