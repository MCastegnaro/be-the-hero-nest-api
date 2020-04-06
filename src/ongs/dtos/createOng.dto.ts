import { IsString, IsNotEmpty } from "class-validator";

export class CreateOngDTO {
    // Just why i create my specific for unique ong.
    id: string;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    whatsapp: string;

    @IsString()
    @IsNotEmpty()
    city: string;

    @IsString()
    @IsNotEmpty()
    uf: string;
}