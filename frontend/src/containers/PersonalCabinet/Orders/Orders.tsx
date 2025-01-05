import React from 'react';
import { MainButton } from "../../../components";
import {
    OrderContainerWrapper,
    OrderContainerWrapperSecondLayer,
    Divider,
    OrdersHeaderTitle,
    OrdersList,
    NoOrdersText,
    OrderItem,
    OrderItemLeft,
    OrderImage,
    LeftOrderInfo,
    DateText,
    NumberOfItemsText,
    OrderItemRight,
    StatusLabel,
    StatusText,
} from "./Orders.styled";
import {colors} from "../../../consts";

const Orders: React.FC = (): React.ReactElement => {
    const orders = [
        { id: 1, date: "27.07.2032", items: 3, status: "In Process" },
        { id: 2, date: "28.07.2032", items: 5, status: "Canceled" },
        { id: 3, date: "29.07.2032", items: 2, status: "Delivered" }
    ];

    return (
        <OrderContainerWrapper>
            <OrderContainerWrapperSecondLayer>
                <OrdersHeaderTitle>Your Orders</OrdersHeaderTitle>
                <OrdersList>
                    {orders.length === 0 ? (
                        <NoOrdersText>You haven't placed any orders yet</NoOrdersText>
                    ) : (
                        orders.map((order, index) => (
                            <OrderItem key={order.id} style={{ animationDelay: `${index * 0.1}s` }}>
                                <OrderItemLeft>
                                    <OrderImage src="https://via.placeholder.com/106" alt="Order" />
                                    <LeftOrderInfo>
                                        <DateText>{order.date}</DateText>
                                        <NumberOfItemsText>{order.items} items</NumberOfItemsText>
                                    </LeftOrderInfo>
                                </OrderItemLeft>
                                <OrderItemRight>
                                    <StatusLabel status={order.status}>
                                        <StatusText status={order.status}>{order.status}</StatusText>
                                    </StatusLabel>
                                    <MainButton
                                        width={70}
                                        backgroundColor={colors.BLACK}
                                        textColor={colors.WHITE}
                                        hoverEffect={{
                                            backgroundColor: colors.LIGHT_GREY_600,
                                            textColor: colors.WHITE,
                                        }}
                                    >
                                        More details
                                    </MainButton>
                                </OrderItemRight>
                            </OrderItem>
                        ))
                    )}
                </OrdersList>
                <Divider />
            </OrderContainerWrapperSecondLayer>
        </OrderContainerWrapper>
    );
};

export default Orders;