import ThirdPartyWebJs from 'supertokens-web-js/recipe/thirdparty'
import SessionWebJs from 'supertokens-web-js/recipe/session'
import { appInfo } from './appInfo'
import { SuperTokensConfig } from "supertokens-web-js/types"
import PasswordlessWebJs from 'supertokens-web-js/recipe/passwordless'
import EmailPassword from 'supertokens-web-js/recipe/emailpassword'
import EmailVerification from "supertokens-web-js/recipe/emailverification";


export const frontendConfig = (): SuperTokensConfig => {
  return {
    appInfo,
    recipeList: [
      ThirdPartyWebJs.init(),
      EmailVerification.init(),
      PasswordlessWebJs.init(),
      SessionWebJs.init(),
      EmailPassword.init(),
    ],
  }
}
