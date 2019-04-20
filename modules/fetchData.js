const fs = require('fs-extra')
const axios = require('axios')

const urls = [
  'https://script.google.com/macros/s/AKfycbyAM3WEpk_cqU9SfZ9tFSs3yw-Y1ls-RyXeMPzqoCWcAuRADbu1/exec?entity=events',
  'https://script.google.com/macros/s/AKfycbyAM3WEpk_cqU9SfZ9tFSs3yw-Y1ls-RyXeMPzqoCWcAuRADbu1/exec?entity=members',
  'https://script.google.com/macros/s/AKfycbyAM3WEpk_cqU9SfZ9tFSs3yw-Y1ls-RyXeMPzqoCWcAuRADbu1/exec?entity=resources'
]


module.exports = function fetchData() {
    //writeData writes the data to a file given the path
    //Same as in previous solution
    const writeData = (path, data) => {
        return new Promise((resolve, reject) => {
            try {
                fs.ensureFileSync(path)
                fs.writeJson(path, data, resolve(`${path} Write Successful`))
            } catch (e) {
                console.error(`${path} Write failed. ${e}`)
                reject(`${path} Write Failed. ${e}`)
            }
        })
    }

    const getData = async builder => {
        fs.emptyDir('static/data')
        console.log(`STARTING JSON BUILD FOR ${urls[0]},${urls[1]},${urls[2]}...`)
        const fetcher = []

        // Fetch list of events, members, and resources from API
        const allEvents = await axios.get(urls[0])
        const allMembers = await axios.get(urls[1])
        const allResources = await axios.get(urls[2])

        fetcher.push(writeData('static/data/events.json', { content: allEvents.data }))
        fetcher.push(writeData('static/data/members.json', { content: allMembers.data }))
        fetcher.push(writeData('static/data/resources.json', { content: allResources.data }))

        console.log(`PROCESSING events, members, resources...`)

        return Promise.all(fetcher)
            .then(() => {
                console.log('JSON Build complete!')
            })
            .catch(e => {
                throw e
            })
    }

    // Run it before the nuxt build stage
    this.nuxt.hook('build:before', getData)
}
