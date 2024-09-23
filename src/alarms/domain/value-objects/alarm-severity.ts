
export enum severityType {
    HIGH = 'HIGH',
    CRITICAL = 'CRITICAL',
    MEDIUM = 'MEDIUM',
    LOW = 'LOW'
}

export class AlarmSeverity {
    constructor(readonly value:severityType) {
        
    }
    equal(severity: AlarmSeverity){
        return this.value === severity.value
    }
}