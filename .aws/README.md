# Notes on AWS
Amazon Web Services is used as the hosting platform of booklink application. Upon merge to `master` branch, sources 
are verified, built and packaged into a docker image which is pushed to AWS. Also, a new version of a task definition 
is rendered and uploaded to AWS. A service then redeploys this new task definition which in turn uses the latest 
docker image.

## AWS Resources
Access to linked resources below requires a sub account from `mrazjava` setup in the AWS. 

* Cluster: [booklink-ec2lx-cluster](https://eu-central-1.console.aws.amazon.com/ecs/home?region=eu-central-1#/clusters/booklink-ec2lx-cluster/services)
   |- Service: [booklink-backend-svc](https://eu-central-1.console.aws.amazon.com/ecs/home?region=eu-central-1#/clusters/booklink-ec2lx-cluster/services/booklink-backend-svc/details)
       |- Task Definition: [booklink-backend-ec2-taskdef](https://eu-central-1.console.aws.amazon.com/ecs/home?region=eu-central-1#/taskDefinitions/booklink-backend-ec2-taskdef/status/ACTIVE)
   |- [Running Tasks](https://eu-central-1.console.aws.amazon.com/ecs/home?region=eu-central-1#/clusters/booklink-ec2lx-cluster/tasks)
   |- EC2 instance [booklink-backend](https://eu-central-1.console.aws.amazon.com/ec2/v2/home?region=eu-central-1#Instances:instanceId=i-09bb02f296bb9e8c3;sort=instanceId)
* ECR: [booklink-backend](https://eu-central-1.console.aws.amazon.com/ecr/repositories/booklink-backend/?region=eu-central-1#)
