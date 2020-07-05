import { Client, TextContent } from '@zenvia/sdk'

export const zenvia = () => {
  console.log('-----------------------------')
  console.log('zenvia')
}

class Zenvia {
  constructor(apiKey, id) {
    this._id = id
    this._client = new Client(apiKey)
    this._whats = this._client.getChannel('whatsapp')
  }
  send(phone, msg) {
    return this._whats.sendMessage(this._id, phone, new TextContent(msg))
  }
}

const instance = new Zenvia(
  '2Nh6pfQiip_dJD1RrmpxDHEKlyb69YEKLN_z',
  'giddy-foxtrot'
)
Object.freeze(instance)

export default instance
