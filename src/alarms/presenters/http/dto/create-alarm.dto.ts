import { IsEnum, IsNotEmpty, IsString } from "class-validator"
import { severityType } from "src/alarms/domain/value-objects/alarm-severity"

export class CreateAlarmDto {
    @IsString()
    @IsNotEmpty()
    name:string
    @IsNotEmpty()
    @IsEnum(severityType,{message:'Severity must be LOW, MEDIUM, or HIGH'})
    severity:severityType
}
