## Where Java store data during program execution?

- stack - links to objects;

- heap - objects;

- ROM - string constants and literals;

## Variables

- not initialized by default;

## Methods

- signature - name + arguments;

## Arrays

- when array of objects is creates links are initialized by `null` values;

- when array of primitives is created values are initialized by zeroes;

## Classes

### Fields

- default initialization: `0`, `false`, `null`;

## Objects

### Equals - hashcode contract

- if objects are equals they must have same hash code;
- if hash codes are same objects may not be equal;
- if hash codes of objects are different objects are not equal;
- if objects are not equal they may have same hash codes;

![equals-hascode-contract](equals-hascode-contract.png)