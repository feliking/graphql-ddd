'use strict';

const Text = require('../../general/Text');

class TareaRealizado extends Text {
  constructor (value, errors) {
    super('realizado', value, { required: true, maxlength: 150 }, errors);
  }
}

module.exports = TareaRealizado;
