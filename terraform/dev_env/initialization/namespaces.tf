resource "kubernetes_namespace" "createUrlShortenerNameSpace" {
  metadata {
    name = var.urlShortenerNameSpace
  }
  depends_on = [ null_resource.ingress_deployment ]
}

resource "kubernetes_namespace" "createargocdNameSpace" {
  metadata {
    name = var.argocdNameSpace
  }
  depends_on = [ null_resource.ingress_deployment ]

}

