import MUIButton from '@mui/material/Button';
import Box from '@mui/material/Box';
import { styled } from "@mui/material/styles";

export const ButtonBox = styled(Box)({
    marginX: '10px',
    marginY: '5px',
    padding: '5px'
});

export const Button = styled(MUIButton)({
    textTransform: 'none',
});

export default function AddBathroomButton() {
    const text = "Add a Bathroom";

    return(
        <Box sx={{ 
            display: 'flex', 
            position: 'fixed', 
            bottom: '0', 
            right: '0',
            zIndex: 'tooltip' }}>
            <ButtonBox>
                <Button variant='contained'>{text}</Button>
            </ButtonBox>
        </Box>
    );
}
