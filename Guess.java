import java.util.Scanner;
import java.lang.Math;

public class Guess {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        int numberToBeGuessed = (int)(Math.random() * 100);
        int num = 0;
        do {
            System.out.println("Enter your guess: ");
            num = sc.nextInt();
            if(num==numberToBeGuessed) {
                System.out.println("Yippeee! you guessed it right :)");
                break;
            } else if(num>numberToBeGuessed) {
                System.out.println("You have guessed a larger number");
            } else {
                System.out.println("You have guessed a smaller number");
            }
        } while (num<=100 && num>=0);
        System.out.println("The game wrap ups. Thank-you");
    }
}