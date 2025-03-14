import { DioAccount } from './DioAccount';

export class SpecialDioAccount extends DioAccount {
    deposit = (value: number): void => {
      if (this['validateStatus']()) {
        this.setBalance(this.getBalance() + value + 10);
        console.log(`Depósito de ${value + 10} realizado com sucesso!`);
      }
    }
  }
  