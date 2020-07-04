import { db } from 'src/lib/db'

export const companies = () => {
  return db.company.findMany()
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