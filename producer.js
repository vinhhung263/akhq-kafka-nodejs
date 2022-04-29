var Kafka = require('node-rdkafka');

var producer = new Kafka.Producer({
    'metadata.broker.list': 'localhost:19092',
    'dr_cb': true
});

// Connect to the broker manually
producer.connect();

// Wait for the ready event before proceeding
producer.on('ready', function () {
    console.log('Producer connected successfully !')
    try {
        producer.produce(
            'topic-frank',
            null,
            Buffer.from('Awesome message'),
            null,
            Date.now()
        );
    } catch (err) {
        console.error('A problem occurred when sending our message');
        console.error(err);
    }
});

// Any errors we encounter, including connection errors
producer.on('event.error', function (err) {
    console.error('Error from producer');
    console.error(err);
})

// We must either call .poll() manually after sending messages
// or set the producer to poll on an interval (.setPollInterval).
// Without this, we do not get delivery events and the queue
// will eventually fill up.
producer.setPollInterval(100);

producer.on('delivery-report', function (err, report) {
    // Report of delivery statistics here:
    console.log('delivery-report', report);
});