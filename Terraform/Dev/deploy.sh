cd ./Initialization
terraform init 
terraform apply -auto-approve

cd ../Infra
terraform init
terraform apply -auto-approve