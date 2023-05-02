import MUIButton from '@mui/material/Button';
import Box from '@mui/material/Box';
import { styled } from "@mui/material/styles";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.js';

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
    // Logic to hide the Add a Bathroom button if user is not logged in
    const [user] = useAuthState(auth);
    console.log(user); 
    
    const leftText = (user) ? 'Log Out' : 'Log In';
    const rightText = (user) ? 'Profile' : 'Sign Up';
    const leftLink = (user) ? '/logout' : '/login';
    const rightLink = (user) ? '/profile' : '/signup';
    return (
        <Box sx={{ 
            display: 'flex', 
            position: 'absolute', 
            top: '0',
            right: '0',
            zIndex: '10' }}>
            <ButtonBox>
                <Button variant="contained" href={leftLink}>{leftText}</Button>
            </ButtonBox>
            <ButtonBox>
                <Button variant="contained" href={rightLink}>{rightText}</Button>
            </ButtonBox>
        </Box>
    );
}


