import { TableClient } from '@azure/data-tables';
import { AzureFunction, Context, HttpRequest } from '@azure/functions';
import { v4 } from 'uuid';
import { DeviceConfig, isIngestData } from '../models';

const httpTrigger: AzureFunction = async function (
  ctx: Context,
  req: HttpRequest,
  deviceConfigs: DeviceConfig[]
): Promise<void> {
  if (process.env.DEBUG_AZURE_FUNCTION) {
    ctx.log.info('Received HTTP Request:', JSON.stringify(req, null, 2));
  }

  const ingestData = req.body;

  if (!isIngestData(ingestData)) {
    ctx.res = {
      status: 400,
      body: {
        error: 'EINVALID',
        message: 'Invalid data received.',
      },
    };

    return;
  }

  if (!deviceConfigs.find(config => config.RowKey === ingestData.deviceId)) {
    ctx.res = {
      status: 403,
      body: {
        error: 'EUNKNOWNDEVICE',
        message: 'Unknown device.',
      },
    };

    return;
  }

  const connectionString = process.env.ConnectionStringStorage || '';
  const latestSensorData = TableClient.fromConnectionString(connectionString, 'LatestSensorData');
  const sensorData = TableClient.fromConnectionString(connectionString, 'SensorData');

  const data = {
    moisture: ingestData.moisture,
    rawValue: ingestData.rawValue,
  };

  await sensorData.createEntity({
    partitionKey: ingestData.deviceId,
    rowKey: `${v4()}_${new Date().getTime()}`,
    ...data,
  });

  await latestSensorData.upsertEntity(
    {
      partitionKey: 'latest',
      rowKey: ingestData.deviceId,
      ...data,
    },
    'Replace'
  );

  ctx.res = {
    status: 204,
  };
};

export default httpTrigger;
