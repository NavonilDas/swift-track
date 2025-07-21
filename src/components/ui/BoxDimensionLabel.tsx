import { BoxDimension, LengthUnit } from '@/types/BoxDimension';
import React from 'react'

function weightUnitToString(unit: LengthUnit) {
    if (unit == LengthUnit.CM) {
        return "Centimeters";
    }
    if (unit == LengthUnit.M) {
        return "Meter";
    }
    if (unit == LengthUnit.IN) {
        return "Inches";
    }
    return "";
}

interface BoxDimensionLabelProps {
    dimension: BoxDimension;
}

function BoxDimensionLabel({ dimension }: BoxDimensionLabelProps) {
    return (
        <span>
            {dimension.length}x{dimension.breadth}x{dimension.height} {weightUnitToString(dimension.unit)}
        </span>
    )
}

export default BoxDimensionLabel
