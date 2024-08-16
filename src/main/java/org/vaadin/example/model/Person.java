package org.vaadin.example.model;

import com.vaadin.hilla.Nullable;

public class Person {
    private String name;

    @Nullable
    private Location location;

    public Person(String name, Location location) {
        this.name = name;
        this.location = location;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setLocation(@Nullable Location location) {
        this.location = location;
    }

    public String getName() {
        return name;
    }

    public @Nullable Location getLocation() {
        return location;
    }
}
