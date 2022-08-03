import { AlgorandBlock, AlgorandTransaction } from "@subql/types-algorand";
import { Block, Transaction } from "../types";
import { TransactionType } from 'algosdk';

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
    assetId: tx.txType === TransactionType.afrz
      ? BigInt(tx.assetFreezeTransaction.assetId)
      : tx.txType === TransactionType.acfg
        ? BigInt(tx.assetConfigTransaction.assetId)
        : undefined,
    amount: tx.txType === TransactionType.axfer
      ? BigInt(tx.assetTransferTransaction.amount)
      : tx.txType === TransactionType.pay
        ? BigInt(tx.paymentTransaction.amount)
        : undefined,
  });
  await entity.save();
}
