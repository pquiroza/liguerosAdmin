/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production:false,
  server: "http://186.34.244.61:5002/ligueros/api",
  firebase:{
    apiKey: "AIzaSyAeE1UZ4_hxQpG9M85iT9HFQDuuJPnfFv4",
       authDomain: "ligueros-af5b3.firebaseapp.com",
       databaseURL: "https://ligueros-af5b3.firebaseio.com",
       projectId: "ligueros-af5b3",
       storageBucket: "ligueros-af5b3.appspot.com",
       messagingSenderId: "290557695821",
       appId: "1:290557695821:web:62d5f7e53cc626b0648904",
       measurementId: "G-VFK6CNBKME"
     }
};
