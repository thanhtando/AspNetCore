import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth';

const fbConfig = {

}

export const fbApp = initializeApp(fbConfig);
export const fbAuth = getAuth(fbApp);

