import React from "react";

const typeCustomer = ["Member", "Silver", "Gold", "Platinum", "Diamond"];
const gender = ["Nam", "Nữ"];
const customerList = [
    {
        id: 1,
        name: "Nguyễn Đức Trung",
        date: "11-04-1990",
        gender: gender[0],
        idCard: "201655558",
        numberPhone: "06905558888",
        email: "trung@gmail.com",
        typeCustomer: typeCustomer[4],
        address: "11 Lê Thanh Nghị, TP. Đà Nẵng",
    },
    {
        id: 2,
        name: "Nguyễn Đức Hoàng",
        date: "11-04-1990",
        gender: gender[0],
        idCard: "201655558",
        numberPhone: "06905558888",
        email: "trung@gmail.com",
        typeCustomer: typeCustomer[4],
        address: "11 Lê Thanh Nghị, TP. Đà Nẵng",
    },
    {
        id: 3,
        name: "Nguyễn Đức Trung",
        date: "11-04-1990",
        gender: gender[0],
        idCard: "201655558",
        numberPhone: "06905558888",
        email: "hau@gmail.com",
        typeCustomer: typeCustomer[4],
        address: "11 Lê Thanh Nghị, TP. Đà Nẵng",
    },
    {
        id: 4,
        name: "Nguyễn Đức Trung",
        date: "11-04-1990",
        gender: gender[0],
        idCard: "201655558",
        numberPhone: "06905558888",
        email: "hau@gmail.com",
        typeCustomer: typeCustomer[4],
        address: "11 Lê Thanh Nghị, TP. Đà Nẵng",
    },
    {
        id: 5,
        name: "Nguyễn Đức Trung",
        date: "11-04-1990",
        gender: gender[0],
        idCard: "201655558",
        numberPhone: "06905558888",
        email: "hau@gmail.com",
        typeCustomer: typeCustomer[4],
        address: "11 Lê Thanh Nghị, TP. Đà Nẵng",
    },

];
export function GetAll() {
    return customerList;
}