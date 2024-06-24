import router from '@adonisjs/core/services/router'
const DestinationsController = () => import('#controllers/destinations_controller')

router.get('/', async () => 'It works!')

router
  .group(() => {
    router.resource('destinations', DestinationsController).apiOnly()
  })
  .prefix('api')
