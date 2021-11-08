import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';
import React from 'react';


const Calender = ({ date, setDate }) => {

   return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
         <StaticDatePicker
            displayStaticWrapperAs="desktop"
            label="Week picker"
            value={date}
            onChange={(newValue) => {
               setDate(newValue);
            }}

            inputFormat="'Week of' MMM d"
         />
      </LocalizationProvider>
   );
};

export default Calender;