
resource "kubernetes_manifest" "selfsigned_cluster_issuer" {

  manifest = {
    apiVersion = "cert-manager.io/v1"
    kind       = "ClusterIssuer"
    metadata = {
      name = "selfsigned-cluster-issuer"
    }
    spec = {
      selfSigned = {}
    }
  }
}

resource "helm_release" "kube-prom-stack" {
  name       = "kube-prom"
  namespace  = var.urlShortenerNameSpace
  repository = "prometheus-community"
  chart      = "kube-prometheus-stack"

  depends_on = [
    kubernetes_manifest.selfsigned_cluster_issuer
  ]

  values = [
    file("${path.module}/../helm_values/values-kube-prometheus-stack.yaml")
  ]

}

resource "helm_release" "argocd_deploy" {
  name       = "argo-cd"
  repository = "https://argoproj.github.io/argo-helm"
  chart      = "argo-cd"
  namespace  = var.argocdNameSpace

  values = [
    file("${path.module}/../helm_values/values-argo-cd.yaml")
  ]
  depends_on = [
    kubernetes_manifest.selfsigned_cluster_issuer,
  ]
}

resource "null_resource" "write_argocd_password_to_file" {
  provisioner "local-exec" {
    command = "../get_argo_password.sh"
  }
  depends_on = [ helm_release.argocd_deploy ]
}




