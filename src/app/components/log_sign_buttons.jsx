import MUIButton from '@mui/material/Button';
import Box from '@mui/material/Box';
import { styled } from "@mui/material/styles";

// Styling for outer box/div/container portion of each button
export const ButtonBox = styled(Box)({
    margin: '5px',
    padding: '5px'
});

// Styling for the buttons
export const Button = styled(MUIButton)({
    textTransform: 'capitalize',
});

// Displays the Log In/Sign Up buttons
export default function LogSignButtons() {
    const loginText = "Log In";
    const signupText = "Sign Up";

    return (
        <Box sx={{ 
            display: 'flex', 
            position: 'absolute', 
            top: '0',
            right: '0',
            zIndex: '10' }}>
            <ButtonBox>
                <Button variant="contained" href='/login'>{loginText}</Button>
            </ButtonBox>
            <ButtonBox>
                <Button variant="contained" href='/signup'>{signupText}</Button>
            </ButtonBox>
        </Box>
    );
}


