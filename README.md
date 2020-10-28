# aws-s3-form-submission

Create Dynamic Forms for S3 Static Websites Using AWS Lambda, Amazon API Gateway, and Amazon SES

This repository consists:

- Files of a static HTML site, under `html` folder.
- A cloudformation template, under `cloudformation` folder, that will:
  - Create a S3 bucket as a website
  - Create Continuous Delivery of the website to S3 via CodeBuild and CodePipeline
  - Create Serverless Functions that send email using SES

## Documentations

- [S3 Bucket Policy](./docs/s3-bucket-policy.md)

## Reference

- <https://github.com/stelligent/devops-essentials/blob/master/samples/static/README.md/>
- <https://aws.amazon.com/blogs/architecture/create-dynamic-contact-forms-for-s3-static-websites-using-aws-lambda-amazon-api-gateway-and-amazon-ses/>
