import SuperTokens from "supertokens-node";
import ThirdPartyNode from 'supertokens-node/recipe/thirdparty'
import SessionNode from 'supertokens-node/recipe/session'
import Dashboard from "supertokens-node/recipe/dashboard";
import EmailPassword from 'supertokens-node/recipe/emailpassword'
import EmailVerification from "supertokens-node/recipe/emailverification";
import UserRoles from "supertokens-node/recipe/userroles"



import { appInfo } from './appInfo'
import { TypeInput } from "supertokens-node/types";

export const backendConfig = (): TypeInput => {
  
  UserRoles.createNewRoleOrAddPermissions("admin", ["create", "read", "update", "delete"]);
  UserRoles.createNewRoleOrAddPermissions("user", ["read"]);

  return {
    framework: "custom",
    supertokens: {
      // These are the connection details of the app you created on supertokens.com
      connectionURI: "https://st-dev-ac5ad730-857f-11ef-a69c-4718ab37ead3.aws.supertokens.io",
      apiKey: "fkNB0vfuqBaWlALw7KXB2OCUzk",
    },
    appInfo,
    recipeList: [
      ThirdPartyNode.init({
        signInAndUpFeature: {
          // We have provided you with development keys which you can use for testing.
          // IMPORTANT: Please replace them with your own OAuth keys for production use.
          providers: [{
            config: {
              thirdPartyId: "google",
              clients: [{
                clientId: "1060725074195-kmeum4crr01uirfl2op9kd5acmi9jutn.apps.googleusercontent.com",
                clientSecret: "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"
              }]
            }
          }, {
            config: {
              thirdPartyId: "github",
              clients: [{
                clientId: "467101b197249757c71f",
                clientSecret: "e97051221f4b6426e8fe8d51486396703012f5bd"
              }]
            }
          }, {
            config: {
              thirdPartyId: "apple",
              clients: [{
                clientId: "4398792-io.supertokens.example.service",
                additionalConfig: {
                  keyId: "7M48Y4RYDL",
                  privateKey:
                    "-----BEGIN PRIVATE KEY-----\nMIGTAgEAMBMGByqGSM49AgEGCCqGSM49AwEHBHkwdwIBAQQgu8gXs+XYkqXD6Ala9Sf/iJXzhbwcoG5dMh1OonpdJUmgCgYIKoZIzj0DAQehRANCAASfrvlFbFCYqn3I2zeknYXLwtH30JuOKestDbSfZYxZNMqhF/OzdZFTV0zc5u5s3eN+oCWbnvl0hM+9IW0UlkdA\n-----END PRIVATE KEY-----",
                  teamId: "YWQCXGJRJL",
                }
              }]
            }
          }],
        }
      }),
      EmailVerification.init({
        mode: "REQUIRED", // or "OPTIONAL"
      }),
      SessionNode.init(),
      UserRoles.init(),
      EmailPassword.init(),
      Dashboard.init(),
    ],
    isInServerlessEnv: true,
  }
}

let initialized = false;
// This function is used in your APIs to make sure SuperTokens is initialised
export function ensureSuperTokensInit() {
  if (!initialized) {
    SuperTokens.init(backendConfig());
    initialized = true;
  }
}