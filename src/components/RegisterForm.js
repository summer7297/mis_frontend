import React, { useState } from 'react';
import { Button, Box, Card, TextField, Typography, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const RegisterForm = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleInputChange = (e, setter) => {
        setter(e.target.value);
        setUsernameError('');
        setPasswordError('');
    };

    const register = () => {
        if (username === "") {
            setUsernameError('This field is required');
            return;
        }

        if (password === "") {
            setPasswordError('This field is required');
            return;
        }

        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        let raw = JSON.stringify({
          "username": username,
          "password": password
        });

        let requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };

        fetch("https://mis-backend-tan.vercel.app/mis/users/", requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .then(() => {
              alert("Your account has been created. Please sign in with the credentials you have used to register.");
              navigate("/")
          })
    };

    return (
        <Box
            sx={{
                width: "100%",
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#EEEDEB"
            }}
        >
            <Card
                sx={{
                    display: "flex",
                    width: "80%",
                    maxWidth: "600px",
                    height: "80%",
                    backgroundColor: "#F5F7F8",
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                <Stack
                    gap={6}
                    sx={{
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                >
                    <Typography variant="h5" sx={{fontWeight: "bold"}}>Maungawhau Institute of Studies</Typography>
                        <Stack gap={2}>
                            <Typography variant="h6">Enter your details</Typography>
                            <TextField
                                label="Username"
                                variant="outlined"
                                sx={{
                                    width: "356px",
                                }}
                                required
                                error={!!usernameError}
                                helperText={usernameError}
                                onChange={(e) => handleInputChange(e, setUsername)}
                            />
                            <TextField
                                label="Password"
                                variant="outlined"
                                sx={{
                                    width: "356px",
                                }}
                                type="password"
                                required
                                error={!!passwordError}
                                helperText={passwordError}
                                onChange={(e) => handleInputChange(e, setPassword)}
                            />
                        </Stack>
                        <Stack gap={2}>
                            <Button
                                variant="contained"
                                sx={{
                                    width: "356px",
                                    color: "#FFFFFF"
                                }}
                                onClick={register}
                            >
                                Register
                            </Button>
                        </Stack>
                </Stack>
            </Card>
        </Box>
    );
}
