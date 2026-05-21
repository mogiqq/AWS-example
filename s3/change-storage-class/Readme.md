# Create a bucket
export AWS_ACCESS_KEY_ID="你的AccessKey"
export AWS_SECRET_ACCESS_KEY="你的SecretKey"
aws s3 mb s3://class-fun-ab-0519

# Create a file

echo "money money money" > money.txt
aws s3 cp money.txt s3://class-fun-ab-0519 --storage-class STANDARD_IA 

# clearup
aws s3 rm s3://class-fun-ab-0519/money.txt
aws s3 rb s3://class-fun-ab-0519
