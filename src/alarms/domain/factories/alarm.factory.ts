import { Injectable } from "@nestjs/common";
import { AlarmSeverity, severityType } from "../value-objects/alarm-severity";
import { randomUUID } from "crypto";
import { Alarm } from "../alarm";

@Injectable()
export class AlarmFactory {
    create(name:string,severity:string) {
        const alarmId = randomUUID()
        const alramSeverity = new AlarmSeverity(severity as AlarmSeverity['value'])
        return new Alarm(alarmId,name,alramSeverity)
    }
}