import React from 'react';

import { Button, Card, Stack, Typography } from "@mui/material";

export const NavBar = () => {
    return (
        <Card
                sx={{
                    width: "100%",
                    height: "50px",
                    backgroundColor: "#F5F7F8",
                    borderRadius: 0
                }}
            >
                <Stack direction="row" gap={5} sx={{
                    display: "flex",
                    alignItems: "center",
                    height: "100%",
                    marginLeft: "24px"
                }}>
                    <Typography variant="h6">MIS</Typography>
                    <Button>Home</Button>
                    <Button disabled>Courses</Button>
                    <Button disabled>Timetable</Button>
                    <Button disabled>Fees & Payments</Button>
                </Stack>
        </Card>
    )
}