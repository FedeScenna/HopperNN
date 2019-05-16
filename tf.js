import * as tf from '@tensorflow/tfjs';

const model = await tf.loadLayersModel('..model/model.json');
const example = tf.fromPixels(webcamElement);  // for example
const prediction = model.predict(example);
