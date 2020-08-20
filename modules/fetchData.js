const fs = require('fs-extra')
const axios = require('axios')

//const GOOGLE_APP_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxmGjl76YSWUtMBrapRFat2KI_qdG3r31Zq6h_H4rNbSPUEA-zh/exec'
const GOOGLE_APP_SCRIPT_URL_cvpr2019 = 'https://script.google.com/macros/s/AKfycbyOjjQvU2CGvtpb-Pa2JVIumAKZYYOmYo9YYS97Rl7Gvak6A1E/exec'
const GOOGLE_APP_SCRIPT_URL_iccv2019 = 'https://script.google.com/macros/s/AKfycbzg3-j4BkJwJ3JU3-OV6JhrjAVAy_pBbOjDQnUKA9VopPZNsKI/exec'
const GOOGLE_APP_SCRIPT_URL_cvpr2020 = 'https://script.google.com/macros/s/AKfycbxySN2m0xbJepdwBZOun7oFp8Jtz-PiB9qNs-jecHcQcU8AmmY/exec'
const GOOGLE_APP_SCRIPT_URL_eccv2020 = 'https://script.google.com/macros/s/AKfycbwIW4YlbrhIoWOCNsWLmhrCLcO1blsmyfq9VqLi-utVffRjip0/exec'


//const urls = [
//`${GOOGLE_APP_SCRIPT_URL}?entity=events`,
//`${GOOGLE_APP_SCRIPT_URL}?entity=members`,
//`${GOOGLE_APP_SCRIPT_URL}?entity=resources`,
//`${GOOGLE_APP_SCRIPT_URL}?entity=summaries`
//]


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
    };

    const writeImage = (path, base64encodedData) => {
        return new Promise((resolve, reject) => {
            try {
                fs.ensureFileSync(path)
                fs.writeFile(path, Buffer.from(base64encodedData, 'base64'), resolve(`${path} Write Successful`));
            } catch (e) {
                console.error(`${path} Write failed. ${e}`)
                reject(`${path} Write Failed. ${e}`)
            }
        })
    };

    const normalizeTag = (tag) => {
        return tag.toLowerCase().replace(/(\s+|\/)/g, '-').replace('#', '');
    }


    const getData_cvpr2019 = async() => {
        let fetcher = [];
        console.log(`STARTING JSON BUILD FOR ${GOOGLE_APP_SCRIPT_URL_cvpr2019}...`);

        // Fetch list of events, members, and resources from API
        const allSummaries = await axios.get(`${GOOGLE_APP_SCRIPT_URL_cvpr2019}?entity=summaries`);

        // download all image and save to static data
        fs.emptyDirSync(`static/image/cvpr2019_summaries/summaries`);
        for (let summary of allSummaries.data) {
            if (summary['images']) {
                summary['image'] = 'https://drive.google.com/uc?export=view&id=' + summary['images'][0];
                delete summary.images; //とりあえず
            }
        }

        // Create list data of all summary data
        fs.emptyDirSync('static/data/cvpr2019_summaries');
        fetcher.push(writeData('static/data/cvpr2019_summaries/all.json', { content: allSummaries.data }));

        // Create summary per page data
        fs.emptyDir('static/data/cvpr2019_summaries/page/');
        const countPerPage = 5
        const numPages = Math.ceil(allSummaries.data.length / countPerPage);
        for (let i = 0; i < numPages; i++) {
            let page = i + 1;
            let start = i * countPerPage;
            let end = i * countPerPage + 5;
            let summariesPerPage = allSummaries.data.slice(start, end);
            let pageDataPath = `static/data/cvpr2019_summaries/page/${page}/list.json`;

            fetcher.push(writeData(pageDataPath, { content: summariesPerPage, meta: { totalCount: allSummaries.data.length } }));
        }

        // Create summary per tag
        fs.emptyDirSync('static/data/cvpr2019_summaries/tag/');
        const tagset = new Set(allSummaries.data.reduce((a, b) => [...a, ...b.tags.filter(tag => tag)], []).map(tag => normalizeTag(tag)));

        fetcher.push(writeData('static/data/cvpr2019_summaries/tags.json', { content: Array.from(tagset) }));

        console.log(tagset)
        for (let tag of tagset) {
            let summariesByTag = allSummaries.data.filter(summary => summary.tags.filter(tag => tag).map(tag => normalizeTag(tag)).includes(tag));
            let tagDataPath = `static/data/cvpr2019_summaries/tag/${tag}/list.json`;

            fetcher.push(writeData(tagDataPath, { content: summariesByTag, meta: { totalCount: summariesByTag.length } }));
        }

        // Save Summary per Id
        fs.emptyDirSync(`static/data/cvpr2019_summaries/id`);
        for (let summary of allSummaries.data) {
            let summaryPath = `static/data/cvpr2019_summaries/id/${summary.id}.json`;

            fetcher.push(writeData(summaryPath, { content: summary, meta: { totalCount: allSummaries.data.length } }));
        }

        return fetcher;
    };

    const getData_iccv2019 = async() => {
        let fetcher = [];
        console.log(`STARTING JSON BUILD FOR ${GOOGLE_APP_SCRIPT_URL_iccv2019}...`)

        // Fetch list of events, members, and resources from API
        const allSummaries = await axios.get(`${GOOGLE_APP_SCRIPT_URL_iccv2019}?entity=summaries`);

        // download all image and save to static data
        fs.emptyDirSync(`static/image/iccv2019_summaries`)
        for (let summary of allSummaries.data) {
            if (summary['images']) {
                summary['image'] = 'https://drive.google.com/uc?export=view&id=' + summary['images'][0];
                delete summary.images; //とりあえず
            }
        }

        // Create list data of all summary data
        fs.emptyDirSync('static/data/iccv2019_summaries');
        fetcher.push(writeData('static/data/iccv2019_summaries/all.json', { content: allSummaries.data }));

        // Create summary per page data
        fs.emptyDirSync('static/data/iccv2019_summaries/page/');
        const countPerPage = 5
        const numPages = Math.ceil(allSummaries.data.length / countPerPage);
        for (let i = 0; i < numPages; i++) {
            let page = i + 1;
            let start = i * countPerPage;
            let end = i * countPerPage + 5;
            let summariesPerPage = allSummaries.data.slice(start, end);
            let pageDataPath = `static/data/iccv2019_summaries/page/${page}/list.json`;

            fetcher.push(writeData(pageDataPath, { content: summariesPerPage, meta: { totalCount: allSummaries.data.length } }));
        }

        // Create summary per tag
        fs.emptyDirSync('static/data/iccv2019_summaries/tag/');
        const tagset = new Set(allSummaries.data.reduce((a, b) => [...a, ...b.tags.filter(tag => tag)], []).map(tag => normalizeTag(tag)));

        fetcher.push(writeData('static/data/iccv2019_summaries/tags.json', { content: Array.from(tagset) }));

        console.log(tagset)
        for (let tag of tagset) {
            let summariesByTag = allSummaries.data.filter(summary => summary.tags.filter(tag => tag).map(tag => normalizeTag(tag)).includes(tag));
            let tagDataPath = `static/data/iccv2019_summaries/tag/${tag}/list.json`;

            fetcher.push(writeData(tagDataPath, { content: summariesByTag, meta: { totalCount: summariesByTag.length } }));
        }

        // Save Summary per Id
        fs.emptyDirSync(`static/data/iccv2019_summaries/id`);
        for (let summary of allSummaries.data) {
            let summaryPath = `static/data/iccv2019_summaries/id/${summary.id}.json`;

            fetcher.push(writeData(summaryPath, { content: summary, meta: { totalCount: allSummaries.data.length } }));
        }
    };

    const getData_cvpr2020 = async() => {
        let fetcher = [];
        console.log(`STARTING JSON BUILD FOR ${GOOGLE_APP_SCRIPT_URL_cvpr2020}...`);

        // Fetch list of events, members, and resources from API
        const allSummaries = await axios.get(`${GOOGLE_APP_SCRIPT_URL_cvpr2020}?entity=summaries`);

        // download all image and save to static data
        fs.emptyDirSync(`static/image/cvpr2020_summaries/summaries`);
        for (let summary of allSummaries.data) {
            if (summary['images']) {
                summary['image'] = 'https://drive.google.com/uc?export=view&id=' + summary['images'][0];
                delete summary.images; //とりあえず
            }
        }

        // Create list data of all summary data
        fs.emptyDirSync('static/data/cvpr2020_summaries');
        fetcher.push(writeData('static/data/cvpr2020_summaries/all.json', { content: allSummaries.data }));

        // Create summary per page data
        fs.emptyDir('static/data/cvpr2020_summaries/page/');
        const countPerPage = 5
        const numPages = Math.ceil(allSummaries.data.length / countPerPage);
        for (let i = 0; i < numPages; i++) {
            let page = i + 1;
            let start = i * countPerPage;
            let end = i * countPerPage + 5;
            let summariesPerPage = allSummaries.data.slice(start, end);
            let pageDataPath = `static/data/cvpr2020_summaries/page/${page}/list.json`;

            fetcher.push(writeData(pageDataPath, { content: summariesPerPage, meta: { totalCount: allSummaries.data.length } }));
        }

        // Create summary per tag
        fs.emptyDirSync('static/data/cvpr2020_summaries/tag/');
        const tagset = new Set(allSummaries.data.reduce((a, b) => [...a, ...b.tags.filter(tag => tag)], []).map(tag => normalizeTag(tag)));

        fetcher.push(writeData('static/data/cvpr2020_summaries/tags.json', { content: Array.from(tagset) }));

        console.log(tagset)
        for (let tag of tagset) {
            let summariesByTag = allSummaries.data.filter(summary => summary.tags.filter(tag => tag).map(tag => normalizeTag(tag)).includes(tag));
            let tagDataPath = `static/data/cvpr2020_summaries/tag/${tag}/list.json`;

            fetcher.push(writeData(tagDataPath, { content: summariesByTag, meta: { totalCount: summariesByTag.length } }));
        }

        // Save Summary per Id
        fs.emptyDirSync(`static/data/cvpr2020_summaries/id`);
        for (let summary of allSummaries.data) {
            let summaryPath = `static/data/cvpr2020_summaries/id/${summary.id}.json`;

            fetcher.push(writeData(summaryPath, { content: summary, meta: { totalCount: allSummaries.data.length } }));
        }

        return fetcher;
    };

    const getData_eccv2020 = async() => {
        let fetcher = [];
        console.log(`STARTING JSON BUILD FOR ${GOOGLE_APP_SCRIPT_URL_eccv2020}...`);

        // Fetch list of events, members, and resources from API
        const allSummaries = await axios.get(`${GOOGLE_APP_SCRIPT_URL_eccv2020}?entity=summaries`);

        // download all image and save to static data
        fs.emptyDirSync(`static/image/eccv2020_summaries/summaries`);
        for (let summary of allSummaries.data) {
            if (summary['images']) {
                summary['image'] = 'https://drive.google.com/uc?export=view&id=' + summary['images'][0];
                delete summary.images; //とりあえず
            }
        }

        // Create list data of all summary data
        fs.emptyDirSync('static/data/eccv2020_summaries');
        fetcher.push(writeData('static/data/eccv2020_summaries/all.json', { content: allSummaries.data }));

        // Create summary per page data
        fs.emptyDir('static/data/eccv2020_summaries/page/');
        const countPerPage = 5
        const numPages = Math.ceil(allSummaries.data.length / countPerPage);
        for (let i = 0; i < numPages; i++) {
            let page = i + 1;
            let start = i * countPerPage;
            let end = i * countPerPage + 5;
            let summariesPerPage = allSummaries.data.slice(start, end);
            let pageDataPath = `static/data/eccv2020_summaries/page/${page}/list.json`;

            fetcher.push(writeData(pageDataPath, { content: summariesPerPage, meta: { totalCount: allSummaries.data.length } }));
        }

        // Create summary per tag
        fs.emptyDirSync('static/data/eccv2020_summaries/tag/');
        const tagset = new Set(allSummaries.data.reduce((a, b) => [...a, ...b.tags.filter(tag => tag)], []).map(tag => normalizeTag(tag)));

        fetcher.push(writeData('static/data/eccv2020_summaries/tags.json', { content: Array.from(tagset) }));

        console.log(tagset)
        for (let tag of tagset) {
            let summariesByTag = allSummaries.data.filter(summary => summary.tags.filter(tag => tag).map(tag => normalizeTag(tag)).includes(tag));
            let tagDataPath = `static/data/eccv2020_summaries/tag/${tag}/list.json`;

            fetcher.push(writeData(tagDataPath, { content: summariesByTag, meta: { totalCount: summariesByTag.length } }));
        }

        // Save Summary per Id
        fs.emptyDirSync(`static/data/eccv2020_summaries/id`);
        for (let summary of allSummaries.data) {
            let summaryPath = `static/data/eccv2020_summaries/id/${summary.id}.json`;

            fetcher.push(writeData(summaryPath, { content: summary, meta: { totalCount: allSummaries.data.length } }));
        }

        return fetcher;
    };

    const getData = async builder => {
        const fetcher = [];
        fs.emptyDirSync('static/data');

        Array.prototype.push.apply(fetcher, await getData_cvpr2019());
        Array.prototype.push.apply(fetcher, await getData_iccv2019());
        Array.prototype.push.apply(fetcher, await getData_cvpr2020());
        Array.prototype.push.apply(fetcher, await getData_eccv2020());

        console.log(`PROCESSING events, members, resources, and summaries...`);

        return Promise.all(fetcher)
            .then(() => {
                console.log('JSON Build complete!');
            })
            .catch(e => {
                throw e;
            });
    };

    // Run it before the nuxt build stage
    this.nuxt.hook('build:before', getData);
};