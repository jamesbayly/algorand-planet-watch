import { AlgorandTransaction } from "@subql/types-algorand";
import { Transaction } from "../types";

export async function handleTransaction(
  tx: AlgorandTransaction
): Promise<void> {
  // logger.info(JSON.stringify(tx));
  const transactionEntity: Transaction = Transaction.create({
    id: tx.id,
    blockHeight: tx.confirmedRound,
    sender: tx.sender,
  });
  if (tx.paymentTransaction) {
    (transactionEntity.reciever = tx.paymentTransaction.receiver),
      (transactionEntity.amount = BigInt(tx.paymentTransaction.amount));
  }
  await transactionEntity.save();
}
