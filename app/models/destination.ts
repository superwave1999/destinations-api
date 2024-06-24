import { DateTime } from 'luxon'
import { column } from '@adonisjs/lucid/orm'
import { DestinationType } from '../types/destination_type.js'
import AbstractModel from '#models/abstract_model'

export default class Destination extends AbstractModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare description: string

  @column()
  declare countryCode: string

  @column()
  declare type: DestinationType

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
