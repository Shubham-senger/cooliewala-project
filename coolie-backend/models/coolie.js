const mongoose = require('mongoose');

const coolieSchema = new mongoose.Schema({
    name: String,
    rating: Number,
    badgeNumber: String,
    contactNumber: Number,
});

const Coolie = mongoose.model('Coolie', coolieSchema);

const data1 = {
    id: 1,
    name: "arun",
    rating: 4,
    badgeNumber: "ab1234",
    contactNumber: 8765432190,
};

const data2 = {
    id: 2,
    name: "ajay",
    rating: 3.4,
    badgeNumber: "ab1235",
    contactNumber: 9876543210,
};

// Coolie.deleteMany({})
//     .then(() => {
//         console.log('All documents deleted');
//     })
//     .catch((err) => {
//         console.error(err);
// });


const insertIfNotExists = async (data) => {
    try {
        const existingDoc = await Coolie.findOne({ name: data.name });

        if (!existingDoc) {
            const insertedDoc = await Coolie.create(data);
            console.log('Inserted document:', insertedDoc);
        } else {
            console.log('Data already exists:', existingDoc);
        }
    } catch (err) {
        console.error(err);
    }
};

insertIfNotExists(data1);
insertIfNotExists(data2);

module.exports = Coolie;