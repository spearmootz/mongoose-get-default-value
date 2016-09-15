# mongoose-get-default-value
Get the default path value set on a schema for a model

adds a static function ont he model to get the default value.  Works on nested properties Example: "fakeProperty.deeperProperty"

# Installation

`npm install mongoose-get-default-value`

# Usage

## On every model
    const mongoose = require('mongoose');
    mongoose.plugin(require('mongoose-get-default-value'));

## On a particular model
    const mongoose = require('mongoose');
    let Schema = mongoose.Schema;

    let sampleSchema = new Schema({
      fakeProperty : { type: String, default: "this is a test"}
    });

    sampleSchema.plugin(require('mongoose-get-default-value'));

    const Sample = mongoose.model('sample', sampleSchema);

    Sample.getDefaultValue('default'); // returns "this is a test"

  
