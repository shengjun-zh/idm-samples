/*
 *  Copyright (c) 2000, 2021, Oracle and/or its affiliates.
 *
 *   Licensed under the Universal Permissive License v 1.0 as shown at
 *   http://oss.oracle.com/licenses/upl.
 */

var ids = {
  oracle: {
    "ClientId": "c9c84e784e2e42499ad74041599cb7be",
    "ClientSecret": "cb96ae93-dbbf-47ae-ae39-78a40d3a0cef",
	  "ClientTenant": "idcs-4dd6d7e5970c4b509f0cb448800fe949",
    "IDCSHost": "https://%tenant%.identity.oraclecloud.com/",
    "AudienceServiceUrl" : "https://idcs-4dd6d7e5970c4b509f0cb448800fe949.identity.oraclecloud.com/",
    "TokenIssuer": "https://identity.oraclecloud.com/",
    "scope": "urn:opc:idm:t.user.me openid",
    "logoutSufix": "/oauth2/v1/userlogout",
    "redirectURL": "http://localhost:3000/callback",
    "LogLevel":"warn",
    "ConsoleLog":"True"
  }
};

module.exports = ids;
