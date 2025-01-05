import React, { useState } from 'react';
import { MainButton } from "../../../components";
import {
    SectionContainer,
    Divider,
    AddressBookContentSection,
    AddressesContainer,
    AddressesHeader,
    AddressesTitle,
    HeaderText,
    AddressList,
    StoredAdrressText,
    AddressItem,
    AddressFunctions,
    AddressFunctionText,
    InputField,
} from "./AddressBook.styled";
import { colors } from "../../../consts";

// Address Type
type Address = {
    id: number;
    name: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
};

const AddressBook: React.FC = (): React.ReactElement => {
    // State for managing addresses
    const [addresses, setAddresses] = useState<Address[]>([
        {
            id: 1,
            name: "Sophie Mitchell",
            address: "2458 Elm Street, Apt 4B",
            city: "Anchorage",
            state: "Alaska",
            zipCode: "90210",
        },
        {
            id: 2,
            name: "John Doe",
            address: "1234 Main Street",
            city: "New York",
            state: "New York",
            zipCode: "10001",
        },
    ]);

    // State for tracking which address is being edited
    const [editingId, setEditingId] = useState<number | null>(null);
    const [editedAddress, setEditedAddress] = useState<Address | null>(null);

    // State for tracking if a new address is being added
    const [isAddingNewAddress, setIsAddingNewAddress] = useState<boolean>(false);
    const [newAddress, setNewAddress] = useState<Address>({
        id: 0,
        name: "",
        address: "",
        city: "",
        state: "",
        zipCode: "",
    });

    // Function to add a new address
    const handleAddAddress = () => {
        setIsAddingNewAddress(true);
        setNewAddress({
            id: addresses.length + 1,
            name: "",
            address: "",
            city: "",
            state: "",
            zipCode: "",
        });
    };

    // Function to handle input changes for new address
    const handleNewAddressInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: keyof Address) => {
        setNewAddress({ ...newAddress, [field]: e.target.value });
    };

    // Function to save the new address
    const handleSaveNewAddress = () => {
        setAddresses([newAddress, ...addresses]); // Добавляем новый адрес в начало списка
        setIsAddingNewAddress(false);
    };

    // Function to cancel adding new address
    const handleCancelNewAddress = () => {
        setIsAddingNewAddress(false);
    };

    // Function to start editing an address
    const handleEditAddress = (id: number) => {
        const addressToEdit = addresses.find((address) => address.id === id);
        if (addressToEdit) {
            setEditingId(id);
            setEditedAddress({ ...addressToEdit });
        }
    };

    // Function to handle input changes
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>, field: keyof Address) => {
        if (editedAddress) {
            setEditedAddress({ ...editedAddress, [field]: e.target.value });
        }
    };

    // Function to save the edited address
    const handleSaveAddress = () => {
        if (editedAddress) {
            const updatedAddresses = addresses.map((address) =>
                address.id === editedAddress.id ? editedAddress : address
            );
            setAddresses(updatedAddresses);
            setEditingId(null);
            setEditedAddress(null);
        }
    };

    // Function to delete an address
    const handleDeleteAddress = (id: number) => {
        const filteredAddresses = addresses.filter((address) => address.id !== id);
        setAddresses(filteredAddresses);
    };

    return (
        <SectionContainer>
            <AddressBookContentSection>
                <AddressesContainer>
                    <AddressesHeader>
                        <AddressesTitle>Address Book</AddressesTitle>
                        <HeaderText>Saved addresses allow for a faster checkout</HeaderText>
                        <HeaderText>{addresses.length} address{addresses.length !== 1 ? "es" : ""}</HeaderText>
                    </AddressesHeader>
                    <AddressesTitle>Stored addresses</AddressesTitle>
                    <AddressList>
                        {isAddingNewAddress && (
                            <AddressItem>
                                <InputField
                                    type="text"
                                    value={newAddress.name}
                                    onChange={(e) => handleNewAddressInputChange(e, "name")}
                                    placeholder="Name"
                                />
                                <InputField
                                    type="text"
                                    value={newAddress.address}
                                    onChange={(e) => handleNewAddressInputChange(e, "address")}
                                    placeholder="Address"
                                />
                                <InputField
                                    type="text"
                                    value={newAddress.city}
                                    onChange={(e) => handleNewAddressInputChange(e, "city")}
                                    placeholder="City"
                                />
                                <InputField
                                    type="text"
                                    value={newAddress.state}
                                    onChange={(e) => handleNewAddressInputChange(e, "state")}
                                    placeholder="State"
                                />
                                <InputField
                                    type="text"
                                    value={newAddress.zipCode}
                                    onChange={(e) => handleNewAddressInputChange(e, "zipCode")}
                                    placeholder="ZIP Code"
                                />
                                <AddressFunctions>
                                    <AddressFunctionText onClick={handleSaveNewAddress}>
                                        Save
                                    </AddressFunctionText>
                                    <AddressFunctionText onClick={handleCancelNewAddress}>
                                        Cancel
                                    </AddressFunctionText>
                                </AddressFunctions>
                            </AddressItem>
                        )}
                        {addresses.map((address) => (
                            <AddressItem key={address.id}>
                                {editingId === address.id && editedAddress ? (
                                    <>
                                        <InputField
                                            type="text"
                                            value={editedAddress.name}
                                            onChange={(e) => handleInputChange(e, "name")}
                                            placeholder="Name"
                                        />
                                        <InputField
                                            type="text"
                                            value={editedAddress.address}
                                            onChange={(e) => handleInputChange(e, "address")}
                                            placeholder="Address"
                                        />
                                        <InputField
                                            type="text"
                                            value={editedAddress.city}
                                            onChange={(e) => handleInputChange(e, "city")}
                                            placeholder="City"
                                        />
                                        <InputField
                                            type="text"
                                            value={editedAddress.state}
                                            onChange={(e) => handleInputChange(e, "state")}
                                            placeholder="State"
                                        />
                                        <InputField
                                            type="text"
                                            value={editedAddress.zipCode}
                                            onChange={(e) => handleInputChange(e, "zipCode")}
                                            placeholder="ZIP Code"
                                        />
                                        <AddressFunctions>
                                            <AddressFunctionText onClick={handleSaveAddress}>
                                                Save
                                            </AddressFunctionText>
                                            <AddressFunctionText onClick={() => setEditingId(null)}>
                                                Cancel
                                            </AddressFunctionText>
                                        </AddressFunctions>
                                    </>
                                ) : (
                                    <>
                                        <StoredAdrressText>
                                            {address.name}, Address: {address.address}, City: {address.city}, State: {address.state}, ZIP Code: {address.zipCode}
                                        </StoredAdrressText>
                                        <AddressFunctions>
                                            <AddressFunctionText onClick={() => handleEditAddress(address.id)}>
                                                Edit address
                                            </AddressFunctionText>
                                            <AddressFunctionText onClick={() => handleDeleteAddress(address.id)}>
                                                Delete
                                            </AddressFunctionText>
                                        </AddressFunctions>
                                    </>
                                )}
                            </AddressItem>
                        ))}
                    </AddressList>
                </AddressesContainer>
                <Divider />
            </AddressBookContentSection>
            <MainButton backgroundColor={colors.LIGHT_GREEN_400} textColor={colors.WHITE} onClick={handleAddAddress}>
                Add new address
            </MainButton>
        </SectionContainer>
    );
};

export default AddressBook;