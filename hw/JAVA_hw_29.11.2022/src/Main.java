public class Main {
    public static void printHello() {
        System.out.println("Hello!");
    }

    public static int multiply(int a, int b) {
        return a * b;
    }


        public void printProperties() {
            System.out.println("myInt: " + ", myString: ");
        }


    public static void main(String[] args) {
        printHello();

        int result = multiply(5, 10);
        System.out.println("Result: " + result);

        MyClass myObject = new MyClass(42, "Hello, World!");

        System.out.println("myInt: " + myObject.getMyInt());
        System.out.println("myString: " + myObject.getMyString());
        myObject.setMyInt(123);
        myObject.setMyString("Goodbye, World!");
        System.out.println("myInt: " + myObject.getMyInt());
        System.out.println("myString: " + myObject.getMyString());

        myObject.printProperties();
    }
}
