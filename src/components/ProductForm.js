import React from "react";
import { TextField, Button as MuiButton, Typography } from "@mui/material";

function ProductForm({ onSubmit }) {
    const customStyle = {
        margin: "5px",
        marginTop: "10px",
        marginBottom: "10px",
        width: "100%",
        height: "50px",
        borderRadius: "5px",
        fontSize: "16px",
    }
    return (
        <>
            <Typography>
                <h1>Add Product</h1>
            </Typography>
            <form onSubmit={onSubmit}>
                <TextField
                    style={customStyle}
                    type="text"
                    label="Name"
                    variant="outlined"
                    name="name"
                    required />
                <TextField
                    style={customStyle}
                    type="text"
                    label="Company"
                    variant="outlined"
                    name="company"
                    required />
                <TextField
                    style={customStyle}
                    type="number"
                    label="Price"
                    inputProps={{ min: 0 }}
                    variant="outlined"
                    name="price"
                    required />
                <TextField
                    style={customStyle}
                    type="number"
                    label="Stock"
                    inputProps={{ min: 0 }}
                    variant="outlined"
                    name="stock"
                    required />
                <MuiButton
                    style={customStyle}
                    variant="contained"
                    color="primary"
                    type="submit"
                >
                    Save
                </MuiButton>
            </form>
        </>
    );
}
export default ProductForm;