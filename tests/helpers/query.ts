import db from '@adonisjs/lucid/services/db'

export default async function randomRow(table: string) {
  return await db.query().from(table).orderByRaw('rand()').limit(1).first()
}
