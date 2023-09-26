terraform {
  required_providers {
    auth0 = {
      source = "auth0/auth0"
      version = "1.0.0"
    }
  }
}

provider "auth0" {}

resource "auth0_client" "terraform-secure-express" {
  name            = "Terraform Secure Express"
  description     = "App for running Dockerized Express application via Terraform"
  app_type        = "regular_web"
  callbacks       = ["http://localhost:3000/callback"]
  oidc_conformant = true

  jwt_configuration {
    alg = "RS256"
  }
}

resource "auth0_connection" "api_connection" {
  name                 = "API"
  strategy             = "auth0"

  options {
    brute_force_protection         = true
    disable_signup                 = false
  }
}

# Configuring client_secret_post as an authentication method.
resource "auth0_client_credentials" "client_credentials" {
  client_id = auth0_client.terraform-secure-express.id
  authentication_method = "client_secret_post"
}

# resource "auth0_connection_client" "my_conn_client_assoc" {
#   connection_id = auth0_connection.api_connection.id
#   client_id     = auth0_client.terraform-secure-express.id
# }

resource "auth0_connection_clients" "my_conn_clients_assoc" {
  connection_id = auth0_connection.api_connection.id
  enabled_clients = [
    auth0_client.terraform-secure-express.id
  ]
}

resource "auth0_resource_server" "terraform-express-resource-server" {
  name                                            = "API"
  identifier                                      = var.api-identifier
  skip_consent_for_verifiable_first_party_clients = true
  token_dialect                                   = "access_token_authz"
  enforce_policies                                = true
}
