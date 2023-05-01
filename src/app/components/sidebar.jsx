import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from "@mui/material/styles";
import SearchFilter from '../components/search_filter.jsx';

export const Item = styled(Paper)({
    padding: '10px'
});

export default function Sidebar() {
    return(
         <Stack spacing={2} sx={{
            display: 'flex',
            flexDirection: 'column',
            margin: '20px',
            width: '30%', 
            position: 'absolute',
            top: '0',
            bottom: '0',
            left: '0',
            zIndex: '10'}}>
            <Item sx={{flex: '1'}}>
                <SearchFilter />
            </Item>
            <Item sx={{flex: '2'}}>test2</Item>
        </Stack>
    );
}

