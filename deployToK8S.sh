#!/bin/bash

docker build -t dawker/docknode . -f Dockerfile.node --no-cache --build-arg port_number=8080 --build-arg db_port_number=27017 
docker push dawker/docknode:latest
kubectl apply -f kube-manifests/
#kubectl set image deployment node nodejs=dawker/docknode
