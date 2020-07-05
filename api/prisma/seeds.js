/* eslint-disable no-console */
const { PrismaClient } = require('@prisma/client')
const dotenv = require('dotenv')

dotenv.config()
const db = new PrismaClient()

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array)
  }
}

const tags = [
  { name: 'queijo' },
  { name: 'bebida' },
  { name: 'carne' },
  { name: 'gráfica' },
  { name: 'reparo' },
]

const users = [
  {
    email: 'sir-markus@live.com',
    name: 'Marcus Feitoza',
    phone: '5875450281',
  },
  {
    email: 'ptejero0@google.cn',
    name: 'Phaedra Tejero',
    phone: '4975453821',
  },
  {
    email: 'mcreaser1@t-online.de',
    name: 'Morgen Creaser',
    phone: '4308177426',
  },
  {
    email: 'ghadny2@craigslist.org',
    name: 'Guthry Hadny',
    phone: '6428910280',
  },
  {
    email: 'dorme3@youtu.be',
    name: 'Dulcinea Orme',
    phone: '3248615369',
  },
  {
    email: 'clikly4@canalblog.com',
    name: 'Collin Likly',
    phone: '3191802366',
  },
  {
    email: 'afronks5@dot.gov',
    name: 'Agneta Fronks',
    phone: '3928462120',
  },
  {
    email: 'idominicacci6@slate.com',
    name: 'Irene Dominicacci',
    phone: '8176721188',
  },
  {
    email: 'mhallihan7@gov.uk',
    name: 'Mareah Hallihan',
    phone: '2185546344',
  },
  {
    email: 'mmclernon8@yelp.com',
    name: 'Mannie McLernon',
    phone: '1273128934',
  },
  {
    email: 'awalley9@timesonline.co.uk',
    name: 'Ashby Walley',
    phone: '2433736697',
  },
]

const companies = [
  {
    company: 'Rhybox',
    isSupplier: true,
    zipCode: '00214',
    address: '34 Vahlen Park',
    state: 'RJ',
    city: 'Macaé',
  },
  {
    company: 'Youspan',
    isSupplier: false,
    zipCode: '65218',
    address: '6837 6th Court',
    state: 'RJ',
    city: 'Rio das Ostras',
  },
  {
    company: 'Voomm',
    isSupplier: true,
    zipCode: '17622',
    address: '26333 Shoshone Pass',
    state: 'RJ',
    city: 'Rio das Ostras',
  },
  {
    company: 'Thoughtworks',
    isSupplier: true,
    zipCode: '44305',
    address: '9 Menomonie Circle',
    state: 'RJ',
    city: 'Cabo Frio',
  },
  {
    company: 'Browseblab',
    isSupplier: false,
    zipCode: '85305',
    address: '144 Browning Way',
    state: 'RJ',
    city: 'Cabo Frio',
  },
  {
    company: 'Wordify',
    isSupplier: false,
    zipCode: '37450',
    address: '70 Graedel Crossing',
    state: 'RJ',
    city: 'Cabo Frio',
  },
  {
    company: 'Oyoloo',
    isSupplier: true,
    zipCode: '90040',
    address: '20 Harbort Circle',
    state: 'RJ',
    city: 'Macaé',
  },
  {
    company: 'Thoughtmix',
    isSupplier: false,
    zipCode: '23509',
    address: '5 3rd Way',
    state: 'RJ',
    city: 'Macaé',
  },
  {
    company: 'Meembee',
    isSupplier: true,
    zipCode: '48919',
    address: '7 Independence Place',
    state: 'RJ',
    city: 'Rio das Ostras',
  },
  {
    company: 'Mynte',
    isSupplier: false,
    zipCode: '22405',
    address: '63 Redwing Place',
    state: 'RJ',
    city: 'Rio das Ostras',
  },
]

async function main() {
  // Seed data is database data that needs to exist for your app to run.
  // Ideally this file should be idempotent: running it multiple times
  // will result in the same database state (usually by checking for the
  // existence of a record before trying to create it). For example:
  //
  //   const existing = await db.user.findMany({ where: { email: 'admin@email.com' }})
  //   if (!existing.length) {
  //     await db.user.create({ data: { name: 'Admin', email: 'admin@email.com' }})
  //   }
  const createdUsers = []

  await asyncForEach(tags, async (tag) => {
    await db.tag.create({ data: tag })
  })
  await asyncForEach(users, async (user) => {
    console.log(`Creating ${user.email}...`)
    createdUsers.push(
      await db.user.create({
        data: user,
      })
    )
  })

  await asyncForEach(companies, async (company, index) => {
    console.log(`Creating ${company.company}...`)
    await db.company.create({
      data: {
        ...company,
        user: {
          connect: { id: createdUsers[index].id },
        },
      },
    })
  })

  console.info('No data to seed. See api/prisma/seeds.js for info.')
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await db.disconnect()
  })
