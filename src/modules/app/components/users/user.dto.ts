/* eslint-disable max-classes-per-file */

import { ApiProperty, ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsBoolean, IsEmail, IsOptional, Length } from 'class-validator';

export class CreateUserDto {
    @IsEmail()
    @ApiProperty()
    email: string;

    @Length(8, 32)
    @ApiProperty()
    password: string;

    @Length(2, 32)
    @ApiProperty()
    firstName: string;

    @Length(2, 32)
    @ApiProperty()
    lastName: string;

    @IsOptional()
    @IsBoolean()
    @Transform(({ value }) => value === 'true' || value === true || value === 1 || value === '1')
    @ApiPropertyOptional({
        default: false,
    })
    active: boolean;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {
}
