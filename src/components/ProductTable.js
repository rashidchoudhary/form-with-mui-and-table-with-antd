import React from "react";
import 'antd/dist/reset.css';
import { Table, Button as AntDButton } from "antd";
import { Typography } from "@mui/material";

function ProductTable({ products, deleteProduct }) {
    const columns = [
        {
            title: "Name",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Company",
            dataIndex: "company",
            key: "company",
        },
        {
            title: "Price",
            dataIndex: "price",
            key: "price",
        },
        {
            title: "Stock",
            dataIndex: "stock",
            key: "stock",
        },
        {
            title: "Action",
            key: "action",
            render: (text, record) =>(
                <AntDButton color="primary" onClick={() => deleteProduct(record._id)}>
                    Delete
                </AntDButton>
            )
        },
    ]

    return(
        <>
        <Typography variant="h5" color="primary">
            Products
        </Typography>
        <Table columns={columns} dataSource={products}/>
        </>
    );
}
export default ProductTable;