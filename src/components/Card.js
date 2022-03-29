import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Nave from './Nave'


    export default function Card({ cards }) {
        console.log(cards)
        return (
            Object.values(cards).map(
                card =>  <Nave nave={card} />
            )
            
        )
    } 
            
