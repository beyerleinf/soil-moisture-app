import { AzureFunction, Context, HttpRequest } from '@azure/functions';
import { Plant, PlantData, SensorData } from '../models';

const httpTrigger: AzureFunction = async function (
  ctx: Context,
  req: HttpRequest,
  plants: Plant[],
  latestSensorData: SensorData[]
): Promise<void> {
  if (process.env.DEBUG_AZURE_FUNCTION) {
    ctx.log.info('Received HTTP Request:', JSON.stringify(req, null, 2));
  }

  const plantData: PlantData[] = [];

  for (const plant of plants) {
    const sensorData = latestSensorData.find(d => d.RowKey === plant.RowKey);

    let moisture = 0;

    if (sensorData) {
      if (sensorData.rawValue < plant.dry && sensorData.rawValue > plant.wet) {
        const range = plant.dry - plant.wet;
        const normalized = plant.dry - sensorData.rawValue;
        moisture = normalized / range;
      } else if (sensorData.rawValue <= plant.wet) {
        moisture = 1;
      }
    }

    plantData.push({
      id: plant.RowKey,
      name: plant.name,
      moisture,
    });
  }

  ctx.res = {
    body: plantData,
  };
};

export default httpTrigger;
