export enum WeightUnit {
    KG = 'KG',
    LB = 'LB',
    TON = 'TON'
}

export interface Weight {
    unit: WeightUnit;
    value: number;
}

