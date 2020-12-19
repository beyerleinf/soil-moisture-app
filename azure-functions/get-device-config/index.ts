import { AzureFunction, Context, HttpRequest } from '@azure/functions';
import { DeviceConfig } from '../models';

const httpTrigger: AzureFunction = async function (
  ctx: Context,
  req: HttpRequest,
  deviceConfigs: DeviceConfig[]
): Promise<void> {
  if (process.env.DEBUG_AZURE_FUNCTION) {
    ctx.log.info('Received HTTP Request:', JSON.stringify(req, null, 2));
  }

  const deviceId = req.params.deviceId;
  const deviceConfig = deviceConfigs.find(config => config.RowKey === deviceId);

  if (deviceConfig) {
    ctx.res = {
      body: deviceConfig,
    };
  } else {
    ctx.log.error(`Tried to get config for device ${deviceId} but it could not be found.`);
    ctx.res = {
      status: 404,
      body: `Device config for device ${deviceId} could not be found.`,
    };
  }
};

export default httpTrigger;
