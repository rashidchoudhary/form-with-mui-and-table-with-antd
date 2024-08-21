import React from "react";
import { AppBar, Toolbar, Typography} from "@mui/material";

function Header() {
    return(
        <>
        <AppBar>
            <Toolbar>
                <Typography variant="h6" color="inherit">
                    Products Store
                </Typography>
            </Toolbar>
        </AppBar>
        </>
    );
}
export default Header;