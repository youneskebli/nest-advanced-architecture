import { Inject, Injectable } from '@nestjs/common';
import { CreateAlarmCommand } from './commands/create-alarm.commands';
import { AlarmRepository } from './ports/alarm.repository';
import { AlarmFactory } from '../domain/factories/alarm.factory';
import { Alarm } from '../domain/alarm';

@Injectable()
export class AlarmsService {
  constructor(
    // @Inject(AlarmRepository)
    private readonly alarmRepository:AlarmRepository,
    private readonly alarmFactory:AlarmFactory
  ){}
  create(createAlarmcommand: CreateAlarmCommand):Promise<Alarm> {
    const alarm = this.alarmFactory.create(createAlarmcommand.name,createAlarmcommand.severity);
    return this.alarmRepository.save(alarm)

  }

  findAll():Promise<Alarm[]> {
    return this.alarmRepository.findAll() ;
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} alarm`;
  // }

  // update(id: number, updateAlarmDto: UpdateAlarmDto) {
  //   return `This action updates a #${id} alarm`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} alarm`;
  // }
}
