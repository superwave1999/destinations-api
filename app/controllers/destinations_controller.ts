import { inject } from '@adonisjs/core'
import DestinationActions from '../actions/destination_actions.js'
import AbstractController from '#controllers/abstract_controller'

@inject()
export default class DestinationsController extends AbstractController {
  constructor(protected actions: DestinationActions) {
    super(actions)
  }
}
