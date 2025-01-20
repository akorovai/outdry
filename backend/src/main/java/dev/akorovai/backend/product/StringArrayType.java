package dev.akorovai.backend.product;

import org.hibernate.engine.spi.SharedSessionContractImplementor;
import org.hibernate.usertype.UserType;


import java.io.Serializable;
import java.sql.*;
import java.util.Objects;

public class StringArrayType implements UserType<String[]> {

    @Override
    public int getSqlType() {
        return Types.ARRAY;
    }

    @Override
    public Class<String[]> returnedClass() {
        return String[].class;
    }

    @Override
    public boolean equals(String[] x, String[] y) {
        return Objects.deepEquals(x, y);
    }

    @Override
    public int hashCode(String[] x) {
        return Objects.hashCode(x);
    }

    @Override
    public String[] nullSafeGet(ResultSet rs, int position, SharedSessionContractImplementor session, Object owner)
            throws SQLException {
        Array array = rs.getArray(position);
        if (array == null) {
            return null;
        }
        return (String[]) array.getArray();
    }

    @Override
    public void nullSafeSet(PreparedStatement st, String[] value, int index, SharedSessionContractImplementor session)
            throws SQLException {
        if (value == null) {
            st.setNull(index, Types.ARRAY);
        } else {
            Connection connection = st.getConnection();
            Array array = connection.createArrayOf("text", value);
            st.setArray(index, array);
        }
    }

    @Override
    public String[] deepCopy(String[] value) {
        if (value == null) {
            return null;
        }
        return value.clone();
    }

    @Override
    public boolean isMutable() {
        return true;
    }

    @Override
    public Serializable disassemble(String[] value) {
        return value;
    }

    @Override
    public String[] assemble(Serializable cached, Object owner) {
        return (String[]) cached;
    }

    @Override
    public String[] replace(String[] detached, String[] managed, Object owner) {
        return detached;
    }
}