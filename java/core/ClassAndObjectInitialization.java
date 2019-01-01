/**
 * This example demonstrates the order of class and object initialization.
 * Class initialization:
 * 1. static fields and class initializers in order of declaration.
 * Object initialization:
 * 1. parent constructor execution
 * 2. instance initializer
 * 3. object fields and instance initializers in order of declaration
 * 4. rest of constructor
 */
public class ClassAndObjectInitialization {
    public static void main(String[] args) {
        new Child();
    }
}

class Parent {
    Parent() {
        System.out.println("I'm parent!");
    }
}

class Child extends Parent {
    static Field staticField = new Field("I'm static field!");

    Field field = new Field("I'm field!");

    {
        System.out.println("I'm instance initializer");
        field = new Field("I'm field in instance initializer!");
    }

    static {
        System.out.println("I'm class initializer");
    }

    final static Field staticFinalField = new Field("I'm final static field!");

    final Field finalField = new Field("I'm Final field");

    public Child(){
        System.out.println("I'm child constructor!");
    }
}

class Field {
    public Field(String argument) {
        System.out.println(argument);
    }
}