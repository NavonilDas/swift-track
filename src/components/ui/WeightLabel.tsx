import { Weight, WeightUnit } from '@/types/Weight'
import React from 'react'

function weightUnitToString(unit: WeightUnit) {
    if (unit == WeightUnit.KG) {
        return "kgs";
    }
    if (unit == WeightUnit.LB) {
        return "lbs";
    }
    if (unit == WeightUnit.TON) {
        return "tons";
    }
    return "";
}

interface WeightLabelProps {
    weight: Weight;
}

function WeightLabel({ weight }: WeightLabelProps) {
    return (
        <span>
            {weight.value} {weightUnitToString(weight.unit)}
        </span>
    )
}

export default WeightLabel