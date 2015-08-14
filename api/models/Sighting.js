var mongoose = require('mongoose');

var sightingSchema = new mongoose.Schema({
    name: { type: String, lowercase: true, require: true },
    order: { type: String, lowercase: true, maxlength: 20 },
    status: {
        type: String,
        lowercase: true,
        enum: [
            'extinct',
            'extinct in the wild',
            'endangered',
            'vulnerable',
            'near threatened',
            'conservation dependent',
            'least concern'
        ]
    }
});

module.exports = mongoose.model('Sighting', sightingSchema);