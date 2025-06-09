import React, { useContext } from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { displayContext } from '../context/contexts';
import {alpha, styled} from '@mui/material/styles';
import {pink} from '@mui/material/colors';

const PinkSwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: pink[600],
    '&:hover': {
      backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
    },
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: pink[600],
  },
}));

const PowerButton = () => {
    const { checked, setChecked } = useContext(displayContext); 

    const handleChange = (event) => {
        setChecked(event.target.checked);
    }
  return (
    <FormGroup>
        <FormControlLabel control={<PinkSwitch checked={checked}
        onChange={handleChange}></PinkSwitch>} label="Power"></FormControlLabel>
    </FormGroup>
  )
}

export default PowerButton
