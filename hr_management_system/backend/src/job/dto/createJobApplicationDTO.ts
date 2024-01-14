import { IsString, IsEmail, IsNumber } from "class-validator";

export class CreateJobApplicationDTO{
    @IsString()
    Name: string;

    @IsEmail()
    Email: string;

    @IsString()
    PhoneNo: string;

    @IsString()
    Address: string

    @IsString()
    UploadFileName: string;

    @IsNumber()
    JobId: number;
}