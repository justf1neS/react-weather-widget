import React, {useCallback, useMemo} from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const SliderComponent = ({min, max, value, disabled, metric, onChange}) => {

    const handlerGetTextValue = useCallback(() => `${value} ${metric}`, [value, metric]);

    const marks = useMemo(() => {
        return [
            {
                value: min,
                label: `${min}${metric}`,
            },
            {
                value: max,
                label: `${max}${metric}`,
            }
        ]
    }, [min, max, metric])


    return (
        <Box sx={{width: 300}}>
            <Slider
                aria-label="Always visible"
                defaultValue={0}
                getAriaValueText={handlerGetTextValue}
                step={1}
                marks={marks}
                valueLabelDisplay="on"
                min={-30}
                max={50}
                onChange={onChange}
                value={value}
                disabled={disabled}
            />
        </Box>
    )
}

export default SliderComponent;
