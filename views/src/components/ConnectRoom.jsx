import React, { useState } from 'react';
// Libs
import axios from 'axios';
import {
    Box,
    Button,
    Flex,
} from 'rebass';
import { Input } from '@rebass/forms';
// Soket
import connectSocket from '../socket';

export default function ConnectRoom(props) {
    // Исользование хуков
    /* Объявление пременной roomId, useState принимает начльное состояние 
    и возвращает текущее состоянее, обновленное состояние */
    const [roomId, setRoomId] = useState('');
    // Объявление пременной Password
    const [password, setPassword] = useState('');

    const dataInput = async () => {
        if (!roomId || !password) {
            alert("Не правильные данные");
        }

        await axios.post('/rooms', {
            roomId,
            password,
        });
        // .then( (res) => console.log(res) )
        // .catch( (error) => console.log(error) )
    }

    return (
        <Flex>
            <Box
                width={1 / 6}
                sx={{
                    margin: "0 auto",
                    pt: "20%",
                    textAlign: "center",
                }}>
                <Input
                    sx={{
                        borderRadius: ""
                    }}
                    onChange={e => setRoomId(e.target.value)}
                    value={roomId}
                    type="text"
                    placeholder="RoomID"
                />
                <Input
                    mt={2}
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                    type="password"
                    placeholder="Password"
                />
                <Button
                    onClick={dataInput}
                    mt={2}
                    variant='secondary'
                    sx={{
                        ":hover": {
                            backgroundColor: 'primary'
                        },
                        transition: "0.3s"
                    }}
                >
                Войти в комнату
                </Button>
            </Box>
        </Flex>
    );
}