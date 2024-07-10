import React from 'react';

import { Box, Stack } from "@mui/material";

import { NavBar } from "../components/NavBar";
import { CourseList } from "../components/CourseList";

export const Dashboard = () => {
    return (
        <Stack
            sx={{
                width: "100%",
                height: "100vh",
                backgroundColor: "#EEEDEB",
                display: "flex",
                flexDirection: "column"
            }}
            gap={5}
        >
            <NavBar />
            <Stack gap={4} sx={{
                alignItems: "center"
            }}>
                <Box>
                    <Stack gap={4}>
                        <CourseList />
                    </Stack>
                </Box>
            </Stack>
        </Stack>
    )
}