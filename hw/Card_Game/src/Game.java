import java.util.List;
import java.util.Random;
import java.util.Scanner;

public class Game {
    public static void main(String[] args) {
        int cardsForPlayer = 5;

        Scanner scanner = new Scanner(System.in);
        Random random = new Random();

        int numberOfCards = cardsForPlayer * 4;

        int maxPlayers = numberOfCards / cardsForPlayer;

        int players;
        do {
            System.out.println("Пожалуйста, введите количество игроков, от 2 до " + maxPlayers);
            while (!scanner.hasNextInt()) {
                System.out.println("Вы ввели не число.");
                scanner.next();
            }
            players = scanner.nextInt();
        } while (players < 2 || players > maxPlayers);

        Deck deck = new Deck();
        deck.shuffle();

        for (int i = 0; i < players; i++) {
            System.out.println("Игрок " + (i + 1) + ":");
            List<Card> hand = deck.deal(cardsForPlayer);
            for (Card card : hand) {
                System.out.println(card);
            }
            System.out.println();
        }
    }
}

