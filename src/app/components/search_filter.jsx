import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import Carousel from 'react-material-ui-carousel';
import { Autocomplete } from '@react-google-maps/api';

// Design and logic for each entry in the filtering carousel
function Item(props)
{
    return (
        <Box>
            <Typography variant='h6' align='center'>Filter By {props.item.filter_type}</Typography>
            <Box sx={{ 
                    display: 'flex', 
                    justifyContent:'space-around'
                    }}>
                {props.item.filters.map( i => <Chip label={i} size='small' variant='outlined' />)}
            </Box>
        </Box>
    )
}

// Design and logic for the Carousel component itself
function FilterChipCarousel()
{
    var filterElements  = [
        {
            filter_type: 'Access',
            filters: [ 'Accessible', 'All-user', 'Public', 'Free' ]
        },
        {
            filter_type: 'Condition',
            filters: [ 'Clean', 'Not under maintenance', 'Open' ]
        },
        {
            filter_type: 'Star Rating',
            filters: [ '★', '★★', '★★★', '★★★★', '★★★★★' ]
        }
    ]
    

    return (
        <Carousel navButtonsAlwaysInvisible='true'>
            {
                filterElements.map( item  => <Item item={item} />)
            }
        </Carousel>
    )
}

// Display/positioning for the search bar, Google Places Autocomplete, and the filter Carousel
export default function SearchFilter() {
    return(
        <Stack spacing={1} sx={{
            display: 'flex',
            flexDirection: 'column',
            padding: '5px',
            height: '100%'}}>
                <Autocomplete>
                    <TextField size='small' fullWidth='true' sx={{ flex: '1' }}
                        id='location-search'
                        variant='outlined'
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                <SearchIcon />
                                </InputAdornment>
                            ),
                            style: {
                                borderRadius: '50px'
                            }
                        }}
                    />
                </Autocomplete>
                <FilterChipCarousel sx={{ flex: '2' }} />
        </Stack>
    );
}
