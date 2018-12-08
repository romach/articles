package ua.com.javaman.model;

public final class Publication {

    private final String title;
    private final String text;

    public Publication(final String title, final String text) {
        this.title = title;
        this.text = text;
    }

    public String title() {
        return this.title;
    }

    public String text() {
        return this.text;
    }
}