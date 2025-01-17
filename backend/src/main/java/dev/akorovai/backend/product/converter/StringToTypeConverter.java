package dev.akorovai.backend.product.converter;

import dev.akorovai.backend.type.Type;
import dev.akorovai.backend.type.TypeRepository;
import org.springframework.core.convert.converter.Converter;
import org.springframework.stereotype.Component;

@Component
public class StringToTypeConverter implements Converter<String, Type> {

    private final TypeRepository typeRepository;

    public StringToTypeConverter(TypeRepository typeRepository) {
        this.typeRepository = typeRepository;
    }

    @Override
    public Type convert(String source) {
        return typeRepository.findByName(source)
                       .orElseThrow(() -> new IllegalArgumentException("Invalid type name: " + source));
    }
}