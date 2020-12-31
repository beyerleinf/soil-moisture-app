export interface IngestData {
  deviceId: string;
  moisture: number;
  rawValue: number;
}

export function isIngestData(arg: any): arg is IngestData {
  return (
    arg !== null &&
    arg !== undefined &&
    typeof arg.deviceId === 'string' &&
    typeof arg.moisture === 'number' &&
    typeof arg.rawValue === 'number'
  );
}
