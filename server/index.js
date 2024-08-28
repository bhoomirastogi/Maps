////server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const stations = require('./stations'); // Import the stations array
const app = express();
const port = 3001;

// Middleware setup
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

function findIntermediateStations(source, destination) {
    const lowercaseSource = source ? source.toLowerCase() : '';
    const lowercaseDestination = destination ? destination.toLowerCase() : '';

    // Check if source is equal to destination
    if (lowercaseSource === lowercaseDestination) {
        return { error: 'Source and destination are the same. Please choose different locations.' };
    }

    const sourceIndex = stations.findIndex(station => (station.value ? station.value.toLowerCase() === lowercaseSource : false));
    const destinationIndex = stations.findIndex(station => (station.value ? station.value.toLowerCase() === lowercaseDestination : false));

    if (sourceIndex === -1 || destinationIndex === -1) {
        return { error: 'Invalid source or destination' };
    }

    const intermediateStations = [];
    let totalTime = 3.9;

    // Refine loop conditions
    const increment = sourceIndex < destinationIndex ? 1 : -1;
    for (let i = sourceIndex + increment; i !== destinationIndex; i += increment) {
        intermediateStations.push({
            station: stations[i].value,
           // time: 2.69, // You can set the time based on your requirements
        });
        totalTime += 3.9;
    }
    return {
        intermediateStations: intermediateStations,
        totalTime: Math.floor(totalTime)
      };
}

app.post('/findRoute', (req, res) => {
    try {
        console.log('Request received:', req.body);

        const { source, destination } = req.body;

        console.log('Source:', source);
        console.log('Destination:', destination);

        const result = findIntermediateStations(source, destination);

        if (result.error) {
            console.log(result.error);
            res.status(400).json({ error: result.error });
        } else {
            const { intermediateStations, totalTime } = result;

            console.log('Intermediate stations:', intermediateStations);
            console.log('Total time:', totalTime);

            res.json({ source, destination, intermediateStations, totalTime });
        }
    } catch (error) {
        console.error('Error:', error);

        // Send a more detailed error response
        res.status(500).json({ error: 'Internal Server Error', message: error.message, stack: error.stack });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});




















