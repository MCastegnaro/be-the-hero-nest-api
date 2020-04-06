import { IsString, IsNotEmpty } from "class-validator";

export class CreateSessionDTO {

    @IsString()
    @IsNotEmpty()
    id: string;
}