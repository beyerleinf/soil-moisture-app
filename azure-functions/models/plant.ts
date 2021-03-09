export interface Plant {
  PartitionKey: string;
  RowKey: string;
  name: string;
  dry: number;
  wet: number;
}
