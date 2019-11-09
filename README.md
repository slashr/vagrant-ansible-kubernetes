###Prerequisites
1. VirtualBox 
2. Ansible
3. Vagrant

###Spinning up the cluster
1. Simply run vagrant up
2. Make sure that the IPs specified inside Vagrantfile, kube-setup/node-playbook.yaml, kube-setup/master-playbook.yaml do not conflict with your local network IPs. If so, please change the IPs from 10.0.0.0/16 to a CIDR of your choice

###Deploying the app
1. Run bash deployToK8S.sh

###Changing ports
1. To change the NodeJS port
    * Use the --build-arg port_number=<8089> during Docker build
    * Change the value of the K8S Service inside kube_manifests/node.yaml to the chosen port number
    * Run kubectl apply -f kube_manifests
2. To change the MongoDB port
    * Use the --build-arg db_port_number=<21018> during Docker build
    * Make sure that the MongoDB instance is configured to run on 21018

###App Usage
1. To create a timestamp entry in the DB, go to <loadbalancer-url>/timestamp-create
2. To get the list of timestamps from the DB, go to <loadbalancer-url>/timestamp
