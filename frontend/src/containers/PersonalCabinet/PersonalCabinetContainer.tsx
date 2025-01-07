import React, { useState } from "react";
import { Breadcrumb } from "../../components";
import {
    Container,
    MenuWrapper,
    Divider,
    MenuContent,
    MenuHeader,
    Title,
    Option,
    OptionsList,
    ContentWrapper,
} from "./PersonalCabinet.styled";

import Overview from "./Overview/Overview.tsx";
import Orders from "./Orders/Orders.tsx";
import AddressBook from "./AddressBook/AddressBook.tsx";
import LogOut from "./LogOut/LogOut.tsx";

const PersonalCabinet: React.FC = (): React.ReactElement => {
    const username = "Ivan";
    const [selectedOption, setSelectedOption] = useState<string>("Overview");

    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
    };

    const options = [
        { key: "Overview", component: <Overview setActiveMenuOption={setSelectedOption} /> },
        { key: "Orders", component: <Orders /> },
        { key: "Address Book", component: <AddressBook /> },
        { key: "Log Out", component: <LogOut /> },
    ];

    const renderContent = () => {
        const selected = options.find((opt) => opt.key === selectedOption);
        return selected ? selected.component : null;
    };

    return (
        <Container>
            <MenuWrapper>
                <MenuContent>
                    <MenuHeader>
                        <Breadcrumb items={["Home", "personal cabinet"]} />
                        <Title>Hi, {username}</Title>
                    </MenuHeader>
                    <OptionsList>
                        {options.map((option) => (
                            <Option
                                key={option.key}
                                isSelected={selectedOption === option.key}
                                onClick={() => handleOptionClick(option.key)}
                            >
                                {option.key}
                            </Option>
                        ))}
                    </OptionsList>
                </MenuContent>
                <Divider />
            </MenuWrapper>
            <ContentWrapper>{renderContent()}</ContentWrapper>
        </Container>
    );
};

export default PersonalCabinet;