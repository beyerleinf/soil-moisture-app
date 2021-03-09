import { AzureFunction, Context, HttpRequest } from '@azure/functions';
import { Plant, SensorData } from '../models';
import { Calculations } from '../utils';

const httpTrigger: AzureFunction = async function (
  ctx: Context,
  req: HttpRequest,
  plants: Plant[],
  latestSensorData: SensorData[]
): Promise<void> {
  if (process.env.DEBUG_AZURE_FUNCTION) {
    ctx.log.info('Received HTTP Request:', JSON.stringify(req, null, 2));
  }

  const result = [];

  for (const plant of plants) {
    const sensorData = latestSensorData.find(d => d.RowKey === plant.RowKey);

    if (sensorData) {
      result.push({ name: plant.name, percentage: Calculations.calculateMoistureLevel(plant, sensorData) });
    } else {
      result.push({ name: plant.name, percentage: -1 });
    }
  }

  ctx.res = {
    body: result,
  };
};

export default httpTrigger;
