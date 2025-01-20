package dev.akorovai.backend.order;

public enum PaymentMethod {
    VISA,
    MASTERCARD,
    PAYPAL;

    public static PaymentMethod fromString(String value) {
        return PaymentMethod.valueOf(value.toUpperCase());
    }
}