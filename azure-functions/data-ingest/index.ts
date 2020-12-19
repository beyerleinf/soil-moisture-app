import { TableClient, TablesSharedKeyCredential } from '@azure/data-tables';
import { AzureFunction, Context, HttpRequest } from '@azure/functions';
import { v4 } from 'uuid';

const httpTrigger: AzureFunction = async function (ctx: Context, req: HttpRequest): Promise<void> {
  if (process.env.DEBUG_AZURE_FUNCTION) {
    ctx.log.info('Received HTTP Request:', JSON.stringify(req, null, 2));
  }

  const account = process.env.StorageAccountName || '';
  const accountKey = process.env.StorageAccountKey || '';
  const credential = new TablesSharedKeyCredential(account, accountKey);
  const client = new TableClient(`https://${account}.table.core.windows.net`, 'LatestSensorData', credential);

  ctx.bindings.sensorDataTableBinding = [
    {
      PartitionKey: req.body.deviceId,
      RowKey: `${v4()}_${new Date().getTime()}`,
      moisture: req.body.moisture,
      rawValue: req.body.rawValue,
    },
  ];

  await client.upsertEntity(
    {
      partitionKey: 'latest',
      rowKey: req.body.deviceId,
      moisture: req.body.moisture,
      rawValue: req.body.rawValue,
    },
    'Replace'
  );

  ctx.res = {
    status: 204,
  };
};

export default httpTrigger;
