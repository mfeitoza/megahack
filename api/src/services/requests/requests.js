import { db } from 'src/lib/db'

export const requests = (_args, { context: { currentUser } }) => {
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
  return db.request.create({
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
  reponsesToRequest: (_obj, { root }) => {
    return db.request.findOne({ where: { id: root.id } }).ReponsesToRequest()
  },
  responses: (_obj, { root }) => {
    return db.request.findOne({ where: { id: root.id } }).ReponsesToRequest()
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

export const getRequestAndResponses2 = async ({ id }) => {
  const query = await db.reponsesToRequest.findMany({
    where: { requestId: id },
    include: {
      response: true,
    },
  })
  console.log('&&&&&&&&&&&&&&&&&&&&&&')
  console.log(query)
  return query
}

export const getRequestAndResponses = async ({ id }) => {
  const query = await db.request.findOne({
    where: { id },
    include: {
      ReponsesToRequest: {
        include: { response: true },
      },
    },
  })
  console.log(query)
  return query
}
