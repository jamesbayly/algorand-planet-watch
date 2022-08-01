import { AlgorandBlock, AlgorandTransaction } from "@subql/types-algorand";
import { Block, Transaction } from "../types";

export async function handleBlock(block: AlgorandBlock): Promise<void> {
  const entity = Block.create({
    id: block.genesisHash,
    height: block.round,
  });
  await entity.save();
}
export async function handleTransaction(tx: AlgorandTransaction): Promise<void> {
  const entity = Transaction.create({
    id: tx.id,
    blockHeight: tx.confirmedRound,
    sender: tx.sender,
  });
  await entity.save();
}
