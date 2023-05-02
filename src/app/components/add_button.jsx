import MUIButton from '@mui/material/Button';
import Box from '@mui/material/Box';
import { styled } from "@mui/material/styles";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase.js';
    
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
    
    // Logic to hide the Add a Bathroom button if user is not logged in
    const [user] = useAuthState(auth);
    console.log(user); 
    if (user) {
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
    else {
        return (
            <>
            </> 
        );
    }
}
