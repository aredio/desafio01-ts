import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  getLoan = (value: number): void => {
    if (this['validateStatus']()) {
      const currentBalance = this.getBalance(); 
      this.setBalance(currentBalance + value); 
      console.log(`Empréstimo de ${value} concedido. Saldo atual: ${this.getBalance()}`);
    }
  }
}