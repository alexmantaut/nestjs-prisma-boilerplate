#!/bin/bash

set -e

ORIGINAL_DIR="$PWD"


if [ -z "${TF_VAR_auth0_domain}" ]; then 
    echo "TF_VAR_auth0_domain not set, please configure"
    exit -1 
fi

if [ -z "${TF_VAR_auth0_client_id}" ]; then 
    echo "TF_VAR_auth0_client_id not set, please configure"
    exit -1 
fi

if [ -z "${TF_VAR_auth0_client_secret}" ]; then 
    echo "TF_VAR_auth0_client_secret not set, please configure"
    exit -1 
fi

echo "Creating Auth0 resources"

cd auth/auth0
terraform init -input=false
terraform apply -input=false

# Run Terraform output command and store the result in variables
CLIENT_ID=$(terraform output client_id)
CLIENT_SECRET=$(terraform output client_secret)
API_IDENTIFIER=$(terraform output auth0_api_identifier)
DOMAIN=$(terraform output auth0_domain)

cd $ORIGINAL_DIR

# Create a .env file
echo "CLIENT_ID=$CLIENT_ID" > auth0.env
echo "CLIENT_SECRET=$CLIENT_SECRET" >> auth0.env
echo "DOMAIN=$DOMAIN" >> auth0.env
echo "API_IDENTIFIER=$API_IDENTIFIER" >> auth0.env

echo "auth0.env file has been created"