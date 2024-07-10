import React, { useEffect, useState } from 'react';

import {Card, Divider, Stack, Typography} from "@mui/material";

export const CourseList = () => {
    const [courses, setCourses] = useState([])

    useEffect( () => {
        const fetchCourses = async () => {
        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        let requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow'
        };

        fetch("https://mis-backend-tan.vercel.app/mis/courses", requestOptions)
          .then(response => response.json())
          .then(result => setCourses(result))
        }
        fetchCourses()
    }, [])

    return (
        <Card
                sx={{
                    width: "80vw",
                    height: "23vh",
                    backgroundColor: "#F5F7F8",
                }}
            >
            <Stack gap={2} sx={{padding: "18px"}}>
                <Typography variant="h5">My courses</Typography>
                <Stack direction="row" gap={2}>
                    {courses.map((course) => (
                        <Card
                            sx={{
                                width: "23vw",
                                height: "200px",
                                padding: "10px"
                            }}
                            key={course.id}
                        >
                            <Stack gap={1}>
                                <Typography sx={{fontWeight: "bold"}}>{course.code}</Typography>
                                <Typography>{course.name}</Typography>
                                <Divider />
                                <Typography variant="subtitle">{course.description}</Typography>
                            </Stack>
                        </Card>
                    ))}
                </Stack>
            </Stack>
        </Card>
    )
}