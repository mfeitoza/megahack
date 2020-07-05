import { suppliers } from 'src/services/companies/companies'
import { db } from 'src/lib/db'
import zenvia from 'src/lib/zenvia'

export const requests = () => {
  return db.request.findMany()
}

export const request = ({ id }) => {
  return db.request.findOne({
    where: { id },
  })
}

export const createRequest = (
  { input: { title, tags, description, validUntil } },
  { context: { currentUser } }
) => {
  const query = db.request.create({
    data: {
      title,
      description,
      validUntil,
      company: {
        connect: { id: currentUser.company.id },
      },
      user: {
        connect: { id: currentUser.id },
      },
      tags: {
        connect: tags.map((tag) => {
          return { name: tag }
        }),
      },
    },
  })
  /*
  const suppliersList = await suppliers()
  suppliersList.map((supplier) => {
    zenvia.send(supplier.user.phone, 'Nova oportunidade: ' + title)
  })
  */
  return query
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
  responses: (_obj, { root }) => {
    return db.request.findOne({ where: { id: root.id } }).responses()
  },
  company: (_obj, { root }) =>
    db.request.findOne({ where: { id: root.id } }).company(),
}

export const findRequestsByUser = ({ id }) => {
  return db.request.findMany({
    where: { createdById: id },
  })
}

export const allActiveRequest = (_args, { context: { currentUser } }) => {
  return db.request.findMany({
    where: {
      userId: {
        not: currentUser.id,
      },
      validUntil: {
        gte: new Date(Date.now()),
      },
    },
  })
}

export const getRequestAndResponses = async ({ id }) => {
  const query = await db.request.findOne({
    where: { id },
    include: {
      response: true,
    },
  })
  return query
}
