export enum LengthUnit {
    CM = 'CM',
    M = 'M',
    IN = 'IN',
    FT = 'FT'
}

export interface BoxDimension {
    unit: LengthUnit;
    length: number;
    breadth: number;
    height: number;
}