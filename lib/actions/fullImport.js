/**
 * Auto-generated action file for "Otoroshi Admin" API.
 *
 * Generated at: 2019-06-06T13:12:41.443Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / maif-local-otoroshi-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'fullImport'
 * Endpoint Path: '/api/otoroshi.json'
 * Method: 'post'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "admins": "admins",
    "apiKeys": "apiKeys",
    "appConfig": "appConfig",
    "alertsEmails": "alertsEmails",
    "alertsWebhooks": "alertsWebhooks",
    "analyticsEventsUrl": "analyticsEventsUrl",
    "analyticsWebhooks": "analyticsWebhooks",
    "apiReadOnly": "apiReadOnly",
    "autoLinkToDefaultGroup": "autoLinkToDefaultGroup",
    "callbackUrl": "callbackUrl",
    "clientId": "clientId",
    "clientSecret": "clientSecret",
    "domain": "domain",
    "backofficeAuth0Config": "backofficeAuth0Config",
    "consumerKey": "consumerKey",
    "consumerSecret": "consumerSecret",
    "orgaId": "orgaId",
    "secret": "secret",
    "token": "token",
    "cleverSettings": "cleverSettings",
    "endlessIpAddresses": "endlessIpAddresses",
    "blacklist": "blacklist",
    "whitelist": "whitelist",
    "ipFiltering": "ipFiltering",
    "limitConcurrentRequests": "limitConcurrentRequests",
    "lines": "lines",
    "apiKey": "apiKey",
    "mailGunSettings": "mailGunSettings",
    "maxConcurrentRequests": "maxConcurrentRequests",
    "maxHttp10ResponseSize": "maxHttp10ResponseSize",
    "maxLogsSize": "maxLogsSize",
    "middleFingers": "middleFingers",
    "perIpThrottlingQuota": "perIpThrottlingQuota",
    "privateAppsAuth0Config": "privateAppsAuth0Config",
    "streamEntityOnly": "streamEntityOnly",
    "throttlingQuota": "throttlingQuota",
    "u2fLoginOnly": "u2fLoginOnly",
    "useCircuitBreakers": "useCircuitBreakers",
    "config": "config",
    "date": "date",
    "dateRaw": "dateRaw",
    "errorTemplates": "errorTemplates",
    "label": "label",
    "serviceDescriptors": "serviceDescriptors",
    "serviceGroups": "serviceGroups",
    "simpleAdmins": "simpleAdmins",
    "calls": "calls",
    "dataIn": "dataIn",
    "dataOut": "dataOut",
    "stats": "stats",
    "requestBody": "requestBody"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = 'application/json';

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};
    securities['otoroshi_auth'] = {username: cfg.auth_username, password: cfg.auth_password};;

    let callParams = {
        spec: spec,
        operationId: 'fullImport',
        pathName: '/api/otoroshi.json',
        method: 'post',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}