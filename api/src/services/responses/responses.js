import { db } from 'src/lib/db'

export const responses = () => {
  return db.response.findMany()
}

export const response = ({ id }) => {
  return db.response.findOne({
    where: { id },
  })
}

export const createResponse = ({ input }) => {
  return db.response.create({
    data: input,
  })
}

export const updateResponse = ({ id, input }) => {
  return db.response.update({
    data: input,
    where: { id },
  })
}

export const deleteResponse = ({ id }) => {
  return db.response.delete({
    where: { id },
  })
}

export const Response = {
  company: (_obj, { root }) =>
    db.response.findOne({ where: { id: root.id } }).company(),
  reponsesToRequests: (_obj, { root }) =>
    db.response.findOne({ where: { id: root.id } }).reponsesToRequests(),
}
