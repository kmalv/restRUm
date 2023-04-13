import MUIButton from '@mui/material/Button';
import Box from '@mui/material/Box';
import { styled } from "@mui/material/styles";

export const ButtonBox = styled(Box)({
    marginX: '10px',
    marginY: '5px',
    padding: '5px'
});

export const Button = styled(MUIButton)({
    textTransform: 'capitalize',
});

export default function LogSignButtons() {
    const loginText = "Log In";
    const signupText = "Sign Up";

    return (
        <Box sx = {{ display: 'flex', position: 'fixed', top: '0', right: '0', zIndex: 'tooltip' }} >
            <ButtonBox>
                <Button variant="contained" href='/login'>{loginText}</Button>
            </ButtonBox>
            <ButtonBox>
                <Button variant="contained" href='/signup'>{signupText}</Button>
            </ButtonBox>
        </Box>
    );
}


