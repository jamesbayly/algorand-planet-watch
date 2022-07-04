import { StarterEntity } from "../types";

export async function handleBlock(block: any): Promise<void> {
  const newEntity = new StarterEntity(block.round);
  newEntity.field2 = "block";
  await newEntity.save();
}
export async function handleTransaction(txn: any): Promise<void> {
  const newEntity = new StarterEntity(txn.id);
  newEntity.field2 = "txn";
  await newEntity.save();
}
