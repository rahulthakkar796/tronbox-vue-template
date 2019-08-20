const contractAddress = 'TS7Hq3Bz8dN2q1cVG6rwy3YjJ195GsVvyW'

const utils = {
  tronWeb: false,
  contract: false,

  async setTronWeb(tronWeb) {
    this.tronWeb = tronWeb
    this.contract = await tronWeb.contract().at(contractAddress)
  }
}

export default utils
