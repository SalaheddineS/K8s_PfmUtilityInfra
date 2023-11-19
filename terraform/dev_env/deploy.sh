cd ./initialization
rm .terraform*
rm terraform.tfstate
rm -rf .terraform
terraform init 
terraform apply -auto-approve

cd ../infra
rm .terraform*
rm terraform.tfstate
rm -rf .terraform
terraform init
terraform apply -auto-approve

cd ../infra_manifests
rm .terraform*
rm terraform.tfstate
rm -rf .terraform
terraform init
terraform apply -auto-approve

cd ..
./get_argo_password.sh