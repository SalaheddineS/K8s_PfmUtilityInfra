resource "kubernetes_manifest" "argocd_application_deploy" {

  manifest = {
    apiVersion = "argoproj.io/v1alpha1"
    kind       = "Application"
    metadata = {
      name      = "pfm-utility-argocd-app"
      namespace = var.argocdNameSpace
    }
    spec = {
      destination = {
        namespace = var.argocdNameSpace
        server    = "https://kubernetes.default.svc"
      }
      project = "default"
      source = {
        path            = "kubernetes/dev/manifests"
        repoURL         = "https://github.com/SalaheddineS/K8s_PfmUtilityInfra"
        targetRevision  = "main"
      }
      syncPolicy = {
        automated = {
          prune    = true
          selfHeal = false
        }
        syncOptions = ["CreateNamespace=true"]
      }
    }
  }
}