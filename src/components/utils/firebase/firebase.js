import  { initializeApp} from 'firebase/app';
import {getFirestore,doc,getDoc,setDoc} from 'firebase/firestore'
import {getAuth,signInWithRedirect,
signInWithPopup,GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBBYYsCEjglB-lfKRQUCakOJFelbu7it6U",
    authDomain: "crown-clothing-ecommerce-a99cc.firebaseapp.com",
    projectId: "crown-clothing-ecommerce-a99cc",
    storageBucket: "crown-clothing-ecommerce-a99cc.appspot.com",
    messagingSenderId: "895877231352",
    appId: "1:895877231352:web:4b33c402e922a69e81010d"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();

  provider.setCustomParameters({
    prompt:"select_account"
  })

  export const auth = getAuth()
  export const signInWithGooglePopup = ()=>signInWithPopup(auth,provider)
  

export const db = getFirestore()

 export const createUserDocumentFromAuth = async (userAuth)=>{
    const userDocRef = doc(db,'users',userAuth.uid)
    console.log(userDocRef) 
const userSnapshot = await getDoc(userDocRef)
// console.log(userSnapshot)
if(!userSnapshot.exists()){
    const {displayName,email} = userAuth;
    const createdAt = new Date()

    try{
        await setDoc(userDocRef,{
            displayName,email,createdAt
        })

    }catch(error){
console.log('error creating the user',error.message)
    }
}
return userDocRef
}
