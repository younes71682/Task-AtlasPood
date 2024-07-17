import * as React from 'react';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Product1 } from './Product1';
import { styled } from '@mui/material';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';


const According = () => {

    const Accordion = styled((props) => (
        <MuiAccordion disableGutters elevation={0} square {...props} />
    ))(({ theme }) => ({
        borderTop: `2px solid ${theme.palette.divider}`,
        '&:not(:last-child)': {
            borderBottom: 0,

        },
        '&::before': {
            display: 'none',
        },
        backgroundColor: 'rgba(0, 0, 0, .03)',
    }));

    const AccordionSummary = styled((props) => (
        <MuiAccordionSummary
            expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
            {...props}
        />
    ))(({ theme }) => ({
        paddingLeft: 0,
        paddingRight: 0,
        backgroundColor:
            theme.palette.mode === 'dark'
                ? '#FBFBFB'
                : '#FBFBFB',
        '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
            transform: 'rotate(180deg)',
        },
        '& .MuiAccordionSummary-content': {
            marginLeft: theme.spacing(0),
        },
    }));

    const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
        padding: theme.spacing(2),
        borderTop: '1px solid rgba(0, 0, 0, .125)',
    }));


    return (
        <div>
            {Product1.more_information.map((i) => {
                return (
                    <>
                        <Accordion key={i.idinfo}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1-content"
                                id="panel1-header"
                            >
                                <Typography >{i.title}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography> {i.description} </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </>
                )
            })}
        </div>
    )
}

export default According




