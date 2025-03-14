import { CompanyAccount } from './class/CompanyAccount';
import { PeopleAccount } from './class/PeopleAccount';
import { SpecialDioAccount } from './class/SpecialDioAccount';

const companyAccount = new CompanyAccount("Empresa XYZ", 12345);
const peopleAccount = new PeopleAccount(987654321, "João Silva", 54321);
const specialAccount = new SpecialDioAccount("Especial", 67890);

console.log(companyAccount.getName());
companyAccount.deposit(1000);
console.log(`Saldo atual: ${companyAccount.getBalance()}`);
companyAccount.getLoan(2000);
console.log(`Saldo atual após empréstimo: ${companyAccount.getBalance()}`);

console.log(peopleAccount.getName());
peopleAccount.deposit(500);
console.log(`Saldo atual: ${peopleAccount.getBalance()}`);
peopleAccount.withdraw(200);
console.log(`Saldo atual após saque: ${peopleAccount.getBalance()}`);

console.log(specialAccount.getName());
specialAccount.deposit(300);
console.log(`Saldo atual após depósito: ${specialAccount.getBalance()}`);
