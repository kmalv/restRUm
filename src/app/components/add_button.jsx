import MUIButton from '@mui/material/Button';
import Box from '@mui/material/Box';
import { styled } from "@mui/material/styles";

export const ButtonBox = styled(Box)({
    margin: '5px',
    padding: '5px'
});

export const Button = styled(MUIButton)({
    textTransform: 'none',
});

// Components and styling for the Add Bathroom button
export default function AddBathroomButton() {
    const text = "Add a Bathroom";

    return(
        <Box sx={{ 
            display: 'flex', 
            position: 'absolute', 
            bottom: '0', 
            right: '0',
            zIndex: '10' }}>
            <ButtonBox>
                <Button variant='contained'>{text}</Button>
            </ButtonBox>
        </Box>
    );
}
