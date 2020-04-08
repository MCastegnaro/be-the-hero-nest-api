import { IsNotEmpty, IsString, IsNumber } from "class-validator";

export class CreateIncidentDTO {

    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsString()
    description: string;

    @IsNotEmpty()
    @IsNumber()
    value: number;

    ong_id: string;
}