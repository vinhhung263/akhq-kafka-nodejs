# Manage & view data inside your Apache Kafka with AKHQ

## Goal

Setup Kafka cluster, AKHQ using Docker and Kafka Producer, Consumer using Nodejs

## Requirement

Nodejs, Docker, basic KAFKA concepts

## Demo architecture

Base on [this scenario](https://www.confluent.io/blog/kafka-client-cannot-connect-to-broker-on-aws-on-docker-etc/#scenario-4)

![listeners1 018-768x543](https://user-images.githubusercontent.com/62415557/165902045-448aeb2d-f424-493d-8722-40973465cc00.png)

### Architecture

![alt text](https://i.ibb.co/dfNhQmD/cluster-architecture.png)


## Steps

Run docker-compose to build KAFKA Cluster with 3 brokers and AKHQ

```
docker-compose pull
docker-compose up
```

Check connections

```
docker container ls
telnet localhost:8080
telnet localhost:9092
telnet localhost:9093
telnet localhost:9094
```

Open AKHQ - KAFKA GUI

![alt text](https://i.ibb.co/SQLsQWT/Capture.png)

Start KAFKA Producer and Consumer on Nodejs (Config first)

```
node producer.js
node consumer.js
```

## Reference

[1] AKHQ - https://akhq.io/docs/

[2] Confluent - https://www.confluent.io/blog/kafka-client-cannot-connect-to-broker-on-aws-on-docker-etc/#scenario-4

[3] Multi-node Kafka cluster (three brokers) - https://gist.github.com/rmoff/ba6c335367764953e390e273e019c083

[4] https://www.npmjs.com/package/node-rdkafka

[5] Github tchiotludo - https://github.com/tchiotludo/akhq
