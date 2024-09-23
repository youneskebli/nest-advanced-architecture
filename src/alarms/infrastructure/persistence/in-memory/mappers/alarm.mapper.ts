import { Alarm } from "../../../../domain/alarm";
import { AlarmEntity } from "../entities/alarm.entity";
import { AlarmSeverity, severityType } from "../../../../domain/value-objects/alarm-severity";

export class AlarmMapper{
    static toDomain(alarmEntity:AlarmEntity):Alarm{
        const alarmSeverity = new AlarmSeverity(
            alarmEntity.severity as severityType
        )
        const alarmModel= new Alarm(
            alarmEntity.id,
            alarmEntity.name,
            alarmSeverity
        )
        return alarmModel
    }

    static toPersistence(alarm:Alarm):AlarmEntity {
        const alarmEntity= new AlarmEntity()
        alarmEntity.id= alarm.id;
        alarmEntity.name= alarm.name;
        alarmEntity.severity= alarm.alarmSeverity.value
        return alarmEntity
    }
}