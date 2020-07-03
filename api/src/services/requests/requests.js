import { db } from 'src/lib/db'

export const requests = () => {
  return db.request.findMany()
}

export const request = ({ id }) => {
  return db.request.findOne({
    where: { id },
  })
}

export const createRequest = ({ input }) => {
  return db.request.create({
    data: input,
  })
}

export const updateRequest = ({ id, input }) => {
  return db.request.update({
    data: input,
    where: { id },
  })
}

export const deleteRequest = ({ id }) => {
  return db.request.delete({
    where: { id },
  })
}

export const Request = {
  tags: (_obj, { root }) =>
    db.request.findOne({ where: { id: root.id } }).tags(),
  user: (_obj, { root }) =>
    db.request.findOne({ where: { id: root.id } }).user(),
  reponsesToRequests: (_obj, { root }) =>
    db.request.findOne({ where: { id: root.id } }).reponsesToRequests(),
}
