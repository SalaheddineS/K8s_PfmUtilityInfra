cd ./initialization
terraform init 
terraform apply -auto-approve

cd ../infra
terraform init
terraform apply -auto-approve

cd ../infra_manifests
terraform init
terraform apply -auto-approve

cd ..
./get_argo_password.sh