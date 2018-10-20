# Kubernetes basics with 3 nested services

This repo is created for testing purposes.

The current test was to successfully get <http://SERVICE_NAME> working. (eg. <http://hello>)

The services go:

- frontend, calling
- apigateway, calling
- hello

[How to install minikube](https://kubernetes.io/docs/tasks/tools/install-minikube/)

then run `minikube start` and `kubectl apply -f kubernetes/` and `minikube service frontend` to run the app.
