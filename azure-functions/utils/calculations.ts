import { Plant, SensorData } from '../models';

export class Calculations {
  static calculateMoistureLevel(plant: Plant, sensorData: SensorData) {
    let percentage = 0;

    if (sensorData.rawValue >= plant.wet && sensorData.rawValue <= plant.dry) {
      const range = plant.dry - plant.wet;
      percentage = 1 - (sensorData.rawValue - plant.wet) / range;
    } else if (sensorData.rawValue < plant.wet) {
      percentage = 1;
    } else {
      percentage = 0;
    }

    return percentage;
  }
}
