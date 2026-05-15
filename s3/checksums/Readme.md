# Create a new S3 Bucket


```md
export AWS_ACCESS_KEY_ID="你的AccessKey"
export AWS_SECRET_ACCESS_KEY="你的SecretKey"
aws s3 mb s3://checksum-example-ab-0514
```

# create a file that will we do a checksum on
```
echo "Hello Moon!" > myfile.txt
```

# get a checksum of a file for md5
```
md5sum myfile.txt
285b35198a5e188b3a0df3ed33f93a26
```

# upload our file and look at its etag
```
aws s3 cp myfile.txt s3://checksum-example-ab-0514
aws s3api head-object --bucket checksum-example-ab-0514 --key myfile.txt

"ETag": "\"285b35198a5e188b3a0df3ed33f93a26\"",
```

# let's upload the file with different checksum

```sh
sudo apt install rhash
rhash --crc32 --simple myfile.txt
3e212472  myfile.txt
```
```sh
aws s3api put-object \
--bucket="checksum-example-ab-0514" \
--key="myfilecrc32.txt" \
--body="./myfile.txt" \
--checksum-algorithm="CRC32"
```