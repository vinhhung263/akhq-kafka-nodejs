var Kafka = require('node-rdkafka');

var consumer = new Kafka.KafkaConsumer({
    'group.id': 'groupGaston',
    'metadata.broker.list': 'localhost:19092',
    'rebalance_cb': function (err, assignment) {
        if (err.code === Kafka.CODES.ERRORS.ERR__ASSIGN_PARTITIONS) {
            // Note: this can throw when you are disconnected. Take care and wrap it in
            // a try catch if that matters to you
            this.assign(assignment);
        } else if (err.code == Kafka.CODES.ERRORS.ERR__REVOKE_PARTITIONS) {
            // Same as above
            this.unassign();
        } else {
            // We had a real error
            console.error(err);
        }
    }
})

// Flowing mode
consumer.connect();

consumer
    .on('ready', function () {
        console.log('Consumer from groupGaston is ready');
        consumer.subscribe(['topic-frank']);

        // Consume from the librdtesting-01 topic. This is what determines
        // the mode we are running in. By not specifying a callback (or specifying
        // only a callback) we get messages as soon as they are available.
        consumer.consume();
    })
    .on('data', function (data) {
        // Output the actual message contents
        console.log('Consumed message: ', data.value.toString())
    });