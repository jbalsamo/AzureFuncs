module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if (req.body.base && req.body.expo) {
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: { 'This is the Answer': Math.pow(req.body.base,req.body.expo) }
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a base and exponent on the query string or in the request body"
        };
    }
};