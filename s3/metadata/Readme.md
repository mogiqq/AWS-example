# Create a bucket

```md
export AWS_ACCESS_KEY_ID="你的AccessKey"
export AWS_SECRET_ACCESS_KEY="你的SecretKey"
aws s3 mb s3://metadata-fun-ab-0518
```

# create a new file

echo "Hello Mars!" > hello.txt

# upload file with metadata

aws s3api put-object --bucket metadata-fun-ab-0518 --key hello.txt --metadata Planet=Mars

# Get Metadata through head object
aws s3api head-object --bucket metadata-fun-ab-0518 --key hello.txt