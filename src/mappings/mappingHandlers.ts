import { StarterEntity } from "../types";
import { AlgorandBlock, AlgorandTransaction } from "@subql/types-algorand";

export async function handleBlock(block: AlgorandBlock): Promise<void> {
  const newEntity = new StarterEntity(block.round.toString());
  newEntity.field1 = block.round;
  newEntity.field2 = "block";
  await newEntity.save();
}
export async function handleTransaction(txn: AlgorandTransaction): Promise<void> {
  const newEntity = new StarterEntity(txn.id);
  newEntity.field1 = txn.roundTime;
  newEntity.field2 = "txn";
  await newEntity.save();
}
