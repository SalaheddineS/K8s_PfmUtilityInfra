provider "kubernetes" {
  config_path    = "~/.kube/config"
  config_context = "minikube"
}

provider "helm" {
  kubernetes {
    config_path    = "~/.kube/config"
    config_context = "minikube"
  }
}


resource "null_resource" "ingress_deployment" {
  provisioner "local-exec" {
    command = "minikube addons enable ingress"
  }
}

resource "kubernetes_namespace" "createUrlShortenerNameSpace" {
  metadata {
    name = "urlshortenerapp"
  }
}

resource "helm_release" "cert_manager" {
  name       = "cert-manager"
  repository = "https://charts.jetstack.io"
  chart      = "cert-manager"
  namespace  = kubernetes_namespace.createUrlShortenerNameSpace.metadata[0].name
  set {
    name  = "installCRDs"
    value = "true"
  }
  depends_on = [
    kubernetes_namespace.createUrlShortenerNameSpace
  ]
}

resource "helm_release" "kube-prom-stack" {
  name       = "kube-prom"
  namespace  = kubernetes_namespace.createUrlShortenerNameSpace.metadata[0].name
  repository = "prometheus-community"
  chart      = "kube-prometheus-stack"

  depends_on = [
    kubernetes_namespace.createUrlShortenerNameSpace,
    kubernetes_manifest.self_signed_cluster_issuer
  ]

  values = [
    file("${path.module}/helm_values/values-kube-prometheus-stack.yaml")
  ]

}


resource "kubernetes_manifest" "self_signed_cluster_issuer" {
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

  depends_on = [helm_release.cert_manager]
}


