import vine from '@vinejs/vine'
import { DestinationType } from '../types/destination_type.js'

export const destinationValidator = vine.compile(
  vine.object({
    name: vine.string().trim().minLength(2).maxLength(255),
    description: vine.string().trim().escape().maxLength(65535),
    type: vine.enum(DestinationType),
    countryCode: vine.string().trim().fixedLength(3).toUpperCase(),
  })
)
