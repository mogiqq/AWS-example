# create a bucket for website 1
export AWS_ACCESS_KEY_ID="你的AccessKey"
export AWS_SECRET_ACCESS_KEY="你的SecretKey"
aws s3 mb s3://cors-fun-ab-0521

# change block public access

aws s3api put-public-access-block \
--bucket cors-fun-ab-0521 \
--public-access-block-configuration "BlockPublicAcls=true,IgnorePublicAcls=true,BlockPublicPolicy=false,RestrictPublicBuckets=false"

# create a bucket policy

aws s3api put-bucket-policy --bucket cors-fun-ab-0521 --policy file://bucket-policy.json

# turn on static website hosting

aws s3api put-bucket-website --bucket cors-fun-ab-0521 --website-configuration file://website.json

# upload out index.html file and include a resource that could be cross origin

aws s3 cp index.html s3://cors-fun-ab-0521

# view the website and see if html is there

http://cors-fun-ab-0521.s3-website-us-east-1.amazonaws.com

http://cors-fun-ab-0521.s3-website.us-east-1.amazonaws.com

# apply a CORS policy



# create a bucket for website 2
aws s3 mb s3://cors-fun2-ab-0525

# change block public access

aws s3api put-public-access-block \
--bucket cors-fun2-ab-0525 \
--public-access-block-configuration "BlockPublicAcls=true,IgnorePublicAcls=true,BlockPublicPolicy=false,RestrictPublicBuckets=false"

# create a bucket policy

aws s3api put-bucket-policy --bucket cors-fun2-ab-0525 --policy file://bucket-policy2.json

# turn on static website hosting

aws s3api put-bucket-website --bucket cors-fun2-ab-0525 --website-configuration file://website.json

# upload out index.html file and include a resource that could be cross origin

aws s3 cp hello.js s3://cors-fun2-ab-0525

# view the website and see if html is there

http://cors-fun2-ab-0525.s3-website-us-east-1.amazonaws.com/hello.js

# create API Gateway with mock response and then test the endpoint

https://dug7iofhh9.execute-api.us-east-1.amazonaws.com/prod
# curl
curl -X POST -H "Content-Type: application/json" https://dug7iofhh9.execute-api.us-east-1.amazonaws.com/prod/hello

# set cors on our bucket

aws s3api put-bucket-cors --bucket cors-fun2-ab-0525 --cors-configuration file://cors.json
