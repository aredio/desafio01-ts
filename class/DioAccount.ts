export abstract class DioAccount {
  private readonly name: string;
  private readonly accountNumber: number;
  private balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  getName = (): string => {
    return this.name;
  }

  deposit = (value: number): void => {
    if (this.validateStatus()) {
      this.balance += value;
      console.log(`Você depositou ${value}. Saldo atual: ${this.balance}`);
    }
  }

  withdraw = (value: number): void => {
    if (this.validateStatus() && this.balance >= value) {
      this.balance -= value;
      console.log(`Você sacou ${value}. Saldo atual: ${this.balance}`);
    } else {
      console.log('Saldo insuficiente ou conta inválida');
    }
  }

  getBalance = (): number => {
    return this.balance;
  }

  setBalance = (amount: number): void => {
    if (amount >= 0) {
      this.balance = amount;
    } else {
      console.log('Valor inválido para o balance');
    }
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error('Conta inválida');
  }
}
