const {
    NODE_ENV,
    REACT_APP_URL: WEBSITE_URL,
} = process.env || {};

const apiDomain = NODE_ENV === 'development' ? WEBSITE_URL : '';

export default {
    apiDomain,
    websiteUrl: WEBSITE_URL,
};
