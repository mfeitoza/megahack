import { db } from 'src/lib/db'

export const reponsesToRequests = () => {
  return db.reponsesToRequest.findMany()
}

export const ReponsesToRequest = {
  request: (_obj, { root }) =>
    db.reponsesToRequest.findOne({ where: { id: root.id } }).request(),
  response: (_obj, { root }) =>
    db.reponsesToRequest.findOne({ where: { id: root.id } }).response(),
}
