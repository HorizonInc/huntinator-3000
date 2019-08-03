const fs = require('fs');

const raw_data = fs.readFileSync('places_org.json');
const json_data = JSON.parse(raw_data);

const new_array = [...json_data.results_one, ...json_data.results_two, ...json_data.results_two];

const final_array = new_array.map(item => {
    return {
        location: item.geometry.location,
        name: item.name
    }
});

const writeObj = {
    places: final_array
}

fs.appendFileSync('places.json', JSON.stringify(writeObj), err => {
    if(err) throw err;
    console.log('saved!')
});