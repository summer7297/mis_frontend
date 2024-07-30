import React, { useState } from 'react';
import { Button, Box, Card, TextField, Typography, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [pw, setPassword] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [passworderror, setPasswordError] = useState('');

    const handleInputChange = (e, setter) => {
        setter(e.target.value);
        setUsernameError('');
        setPasswordError('');
    };

    const signIn = () => {
        if (username === "") {
            setUsernameError('This field is required');
            return;
        }

        if (pw === "") {
            setPasswordError('This field is required');
            return;
        }

        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        let raw = JSON.stringify({
          "username": username,
          "password": pw
        });

        let requestOptions = {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow'
        };

        fetch("https://mis-backend-tan.vercel.app/mis/api/login/", requestOptions)
          .then(response => response.json())
          .then(result => {
              if (result.result === "error") {
                  alert("The username and password you entered did not match our records. " +
                      "Please double-check and try again.");
              }
              else {
                    navigate("/dashboard")
              }
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
                            <Typography variant="h6">Sign in with your account</Typography>
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
                                error={!!passworderror}
                                helperText={passworderror}
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
                                onClick={signIn}
                            >
                                Sign In
                            </Button>
                            <Button
                                variant="contained"
                                color="secondary"
                                sx={{
                                    width: "356px",
                                    color: "#FFFFFF"
                                }}
                                onClick={() => {
                                    console.log("clicked")
                                    navigate("/register")
                                }}
                            >
                                Register
                            </Button>
                        </Stack>
                </Stack>
            </Card>
        </Box>
    );
}