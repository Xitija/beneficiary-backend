import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { ValidateNested, IsArray, IsOptional, IsString, IsEnum } from 'class-validator';

export class CustomFieldInUserServiceDto {
  @ApiProperty()
  @IsString()
  fieldId: string;

  @ApiProperty()
  @IsString()
  value: string;
}

export class UserDataInUserServiceDto {
  @ApiProperty()
  @IsString()
  username: string;

  @ApiProperty()
  @IsString()
  firstName: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  middleName?: string;

  @ApiProperty()
  @IsString()
  lastName: string;

  @ApiProperty({ enum: ['male', 'female', 'other'] })
  @IsEnum(['male', 'female', 'other'])
  gender: string;

  @ApiProperty()
  @IsString()
  role: string;

  @ApiProperty()
  @IsString()
  dob: string;

  @ApiProperty()
  @IsString()
  email: string;

  @ApiProperty()
  @IsString()
  district: string;

  @ApiProperty()
  @IsString()
  state: string;

  @ApiProperty()
  @IsString()
  address: string;

  @ApiProperty()
  @IsString()
  pincode: string;

  @ApiProperty()
  @IsString()
  createdAt: string;

  @ApiProperty()
  @IsString()
  updatedAt: string;

  @ApiProperty()
  @IsString()
  createdBy: string;

  @ApiProperty()
  @IsString()
  updatedBy: string;

  @ApiProperty()
  @IsString()
  tenantId: string;

  @ApiProperty()
  @IsString()
  status: string;

  @ApiProperty()
  @IsString()
  reason: string;

  @ApiProperty()
  @IsString()
  deviceId: string;

  @ApiProperty({ enum: ['add', 'update', 'delete'] })
  @IsEnum(['add', 'update', 'delete'])
  action: string;
}

export class UpdateUserInUserServiceDto {
  @ApiProperty({ type: UserDataInUserServiceDto })
  @ValidateNested()
  @Type(() => UserDataInUserServiceDto)
  userData: UserDataInUserServiceDto;

  @ApiProperty({ type: [CustomFieldInUserServiceDto], required: false })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CustomFieldInUserServiceDto)
  @IsOptional()
  customFields?: CustomFieldInUserServiceDto[];
}