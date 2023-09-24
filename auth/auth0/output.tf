output "auth0_domain" {
  value = var.auth0_domain
}

output "client_id" {
  value = auth0_client.terraform-secure-express.client_id
}

output "auth0_api_identifier" {
  value = var.api-identifier
}

output "client_secret" {
  value       = auth0_client_credentials.client_credentials.client_secret
  sensitive   = true
}