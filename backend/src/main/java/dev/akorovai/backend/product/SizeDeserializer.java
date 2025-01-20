package dev.akorovai.backend.product;

import com.fasterxml.jackson.core.JsonParser;
import com.fasterxml.jackson.databind.DeserializationContext;
import com.fasterxml.jackson.databind.JsonDeserializer;

import java.io.IOException;

public class SizeDeserializer extends JsonDeserializer<Size> {
    @Override
    public Size deserialize( JsonParser p, DeserializationContext ctxt) throws IOException {
        String value = p.getText();
        try {
            return Size.valueOf(value.toUpperCase());
        } catch (IllegalArgumentException e) {
            throw new IllegalArgumentException("Invalid size value: " + value);
        }
    }
}