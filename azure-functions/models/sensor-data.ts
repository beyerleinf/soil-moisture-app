export interface SensorData {
  PartitionKey: string;

  /**
   * Device ID.
   */
  RowKey: string;
  rawValue: number;
}
