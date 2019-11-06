###Changing ports
1. To change the NodeJS port
    * Use the --build-arg port_number=<8089> during Docker build
    * Change the value of the K8S Service inside kube_manifests/node.yaml to the chosen port number
    * Run kubectl apply -f kube_manifests
2. To change the MongoDB port
    * Use the --build-arg db_port_number=<21018> during Docker build
    * Make sure that the MongoDB instance is configured to run on 21018
