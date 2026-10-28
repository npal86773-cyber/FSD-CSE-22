
class Bank {
    int balance = 1000;

    synchronized void withdraw(int amount) {
        if (balance >= amount) {
            balance -= amount;
        } else {
            System.out.println("Insufficient balance");
        }

        System.out.println("Current balance: " + balance);
    }
}

class MyThread extends Thread {
    Bank b;
    int amount;

    MyThread(Bank b, int amount) {
        this.b = b;
        this.amount = amount;
    }

    @Override
    public void run() {
        b.withdraw(amount);
    }
}

public class bankThreadEx {
    public static void main(String[] args) {
        Bank b = new Bank();

        MyThread t1 = new MyThread(b, 700);
        MyThread t2 = new MyThread(b, 500);

        t1.start();
        t2.start();
    }
}
