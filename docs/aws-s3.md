# AWS S3 (Simple Storage Services)

## Bucket Policy (Recommended)

Best practice is to control access to S3 object through **Bucket Policy**. Instead of using `--acl public-read` option when using AWS CLI.

Example: Allow public access to specific path or files. Use `*` for public access to entire S3.
```yaml
  PolicyDocument:
    Version: '2012-10-17'
    Statement:
      Sid: 'AllowIPs'
      Action: 's3:GetObject'
      Effect: Allow
      Principal: '*'
      Resource: !Sub 'arn:aws:s3:::${SiteBucketBh}/<<YOUR_PATH_OR_FILE_EXTENSION>>'
```

Example: To allow CloudFront have access to S3 when using CDN
```yaml
  PolicyDocument:
    Version: '2012-10-17'
    Statement:
      Sid: 'AllowCloudFront'
      Action: 's3:GetObject'
      Effect: Allow
      Principal: 
        # Note: Replace logical ID of OAI after CloudFront created, such as E15MNIMTCFKK4C.
        AWS: 'arn:aws:iam::cloudfront:user/CloudFront Origin Access Identity E15MNIMTCFKK4C'
      Resource: !Sub 'arn:aws:s3:::${BucketName}/*'
```

Example: Restrict access by IPs
```yaml
  PolicyDocument:
    Version: '2012-10-17'
    Statement:
      Sid: 'AllowIPs'
      Action: 's3:GetObject'
      Effect: Allow
      Principal: '*'
      Resource: !Sub 'arn:aws:s3:::${SiteBucketBh}/*'
      Condition:
        IpAddress:
          'aws:SourceIp':
            - <<YOUR_IP_ADDRESSES>>
            - <<YOUR_IP_ADDRESSES>>
```

Example: To allow request from specific domains.
```yaml
  PolicyDocument:
    Version: '2012-10-17'
    Statement:
      Sid: 'AllowReferers'
      Action: 's3:GetObject'
      Effect: Allow
      Principal: '*'
      Resource: !Sub 'arn:aws:s3:::${SiteBucketBh}/*'
      Condition:
        StringLike:
          'aws:Referer':
            - '<<YOUR_DOMAIN_NAMES>>'
            - '<<YOUR_DOMAIN_NAMES>>'
```


## Reference

- [AWS Policy Generator](https://awspolicygen.s3.amazonaws.com/policygen.html)
- [Bucket Policy Examples](https://docs.aws.amazon.com/AmazonS3/latest/dev/example-bucket-policies.html)
- [Condition keys for bucket policy](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html)
