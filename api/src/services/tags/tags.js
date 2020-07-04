import { db } from 'src/lib/db'

export const tags = () => {
  return db.tag.findMany()
}

export const tag = ({ name }) => {
  return db.tag.findOne({
    where: { name },
  })
}

export const createTag = ({ input }) => {
  return db.tag.create({
    data: input,
  })
}

export const updateTag = ({ name, input }) => {
  return db.tag.update({
    data: input,
    where: { name },
  })
}

export const deleteTag = ({ name }) => {
  return db.tag.delete({
    where: { name },
  })
}

export const Tag = {
  requests: (_obj, { root }) =>
    db.tag.findOne({ where: { name: root.name } }).requests(),
}
