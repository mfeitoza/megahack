import { db } from 'src/lib/db'

export const companies = () => {
  return db.company.findMany({ include: { user: true } })
}

export const company = ({ id }) => {
  return db.company.findOne({
    where: { id },
  })
}

export const createCompany = ({ input }) => {
  return db.company.create({
    data: input,
  })
}

export const updateCompany = ({ id, input }) => {
  return db.company.update({
    data: input,
    where: { id },
  })
}

export const deleteCompany = ({ id }) => {
  return db.company.delete({
    where: { id },
  })
}

export const Company = {
  user: (_obj, { root }) =>
    db.company.findOne({ where: { id: root.id } }).user(),
  requests: (_obj, { root }) =>
    db.company.findOne({ where: { id: root.id } }).requests(),
  responses: (_obj, { root }) =>
    db.company.findOne({ where: { id: root.id } }).responses(),
}

export const createCompanyWithUser = ({ userId, input }) => {
  return db.company.create({
    data: {
      ...input,
      user: {
        connect: { id: userId },
      },
    },
  })
}

export const companyRequests = (_args, { context: { currentUser } }) => {
  return db.company
    .findOne({
      where: { id: currentUser.company.id },
    })
    .request()
}

export const suppliers = () => {
  return db.company.findMany({
    where: { isSupplier: true },
    include: {
      user: true,
    },
  })
}
