# cloudformation

## Prerequisites

- Cloud​Formation, [How it works](https://aws.amazon.com/cloudformation/)
- AWS account predefined with the following resources:
  - VPC
  - Subnets
  - Security Groups

## Deploy with AWS CloudFormation (Infrastructure as Code)

Package and upload the local artifacts with [Cloudformation package](https://docs.aws.amazon.com/cli/latest/reference/cloudformation/package.html) command.

```cli
aws cloudformation package --template-file $CF_MASTER_TEMPLATE_FILE_NAME \
        --s3-bucket $CODEPIPELINE_S3_BUCKET_NAME \
        --s3-prefix cf-stacks-template \
        --output-template-file transformed-$CF_MASTER_TEMPLATE_FILE_NAME
```
