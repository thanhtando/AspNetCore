
const FirestoreExmpleGetData = () => {
  const db = getFirestore(appFb);

  const ExampleData = async () => {
    const citiesRef = collection(db, "cities");
    await setDoc(doc(citiesRef, "SF"), {
        name: "San Francisco", state: "CA", country: "USA",
        capital: false, population: 860000,
        regions: ["west_coast", "norcal"] });
    await setDoc(doc(citiesRef, "LA"), {
        name: "Los Angeles", state: "CA", country: "USA",
        capital: false, population: 3900000,
        regions: ["west_coast", "socal"] });
    await setDoc(doc(citiesRef, "DC"), {
        name: "Washington, D.C.", state: null, country: "USA",
        capital: true, population: 680000,
        regions: ["east_coast"] });
    await setDoc(doc(citiesRef, "TOK"), {
        name: "Tokyo", state: null, country: "Japan",
        capital: true, population: 9000000,
        regions: ["kanto", "honshu"] });
    await setDoc(doc(citiesRef, "BJ"), {
        name: "Beijing", state: null, country: "China",
        capital: true, population: 21500000,
        regions: ["jingjinji", "hebei"] });
  }
  const GetDocument = async () => {
    const docRef = doc(db, "cities", "SF");
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      // console.log("Document data:", docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      // console.log("No such document!");
    }
  }
  const getMultDocFromCol = async () => {
    const q = query(collection(db, "cities"), where("capital", "==", true));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.id, " => ", doc.data());
    });
  }
  return(
    <div style={{backgroundColor: 'aqua', display: 'flex', flexDirection: 'row'}}>
      <button onClick={ExampleData}>mock data</button>
      <button onClick={GetDocument}>get data</button>
      <button onClick={getMultDocFromCol}>get multi</button>
    </div>
  )
}
const FbAuthSignupBtn = () => {
  const onSignup = () => {

    const emailAddress ='tantan4@test.com';
    const password = 'password';
    // const auth = getAuth(appFb);
    console.log(auth);
    createUserWithEmailAndPassword(auth, emailAddress, password)
      .then((userCredential)=>{
        // console.log('user crated');
      })
      .catch((error)=>{
        // alert(error.message);
        console.error(error);
      })
  }
  return(
    <div>
      <button onClick={onSignup}> create user</button>
    </div>
  )
}
const FbAuthSigninBtn = () => {
  const onSignin = () => {
    try{
      const auth = getAuth(appFb);
      const emailAddress = 'test@test.com';
      const password = 'password';
      signInWithEmailAndPassword(auth, emailAddress, password)
        .then((user)=>{
          // console.log('log in with ', user);
        })
        .catch((error)=>{
          alert(error.message);
          console.error(error);
        })
    }catch(e){
      console.error(e);
    }  

  }
  return(
    <div>
      <button onClick={onSignin}> log in with user</button>
    </div>
  )
}

const FbAuthGgBtn = () => {
  const onGGsignin = () => {
    const provider = new GoogleAuthProvider()
  
    const auth = getAuth()
    signInWithPopup(auth, provider)
      .then((result) => {
        // console.log('Googleアカウントでログインしました。')
      }).catch((error) => {
        console.error(error)
      })
  }
  return (
    <div>
      <button onClick={onGGsignin}>Googleアカウントでログイン</button>
    </div>
  );
}
const FbAuthSignOutBtn = () => {

  const onSignout = () => {
    const auth = getAuth(appFb)
    signOut(auth).then(() => {
      // Sign-out successful.
      alert('サインアウトしました。')
    }).catch((error) => {
      // An error happened.
      console.error(error)
    })
  }
  return (
    <div>
      <button onClick={onSignout}>ログアウト</button>
    </div>
  );
}

// export const createNote = async (note) => {
//   await addDoc(collection(db, 'notes'), coin);
// };
// createNote(note);
const FsGetBtn = () => {
  const onGet = async () => {
    // console.log("test get firestore")
    const db = getFirestore(appFb);
    const querySnapshot = await getDocs(collection(db, "tasks"));
    querySnapshot.forEach((doc) => {
      // console.log(`${doc.id} => ${doc.data()}`);
    });
  }
  return(<div>
    <button onClick={onGet}> Firestore get</button>
  </div>)
  
}
const FsAddBtn = () => {
  const onAdd = async () => {

    const id = "05";
    const name = "tan_test";
    const uid = "";
    // console.log("test add firestore");
    const db = getFirestore(appFb);
    const docRef = await addDoc(collection(db, 'tasks'),{
      uid: uid,
      id: id,
      name: name
    })
    // console.log('Document', docRef.id);
    // Create our initial doc
    // const docRef = await addDoc(collection(db, "cities"), {
    //   name: "Tokyo",
    //   country: "Japan"
    // });
    // console.log("Document written with ID: ", docRef.id);

    // db.collection("users").doc("frank").set({
    //   name: "Frank",
    //   favorites: {
    //     food: "Pizza",
    //     color: "Blue",
    //     subject: "Recess"
    //   },
    //   age: 12
    // }).then(function() {
    //   console.log("Frank created");
    // });

    // Update the doc without using dot notation.
    // Notice the map value for favorites.
    // db.collection("users").doc("frank").update({
    //   favorites: {
    //     food: "Ice Cream"
    //   }
    // }).then(function() {
    //   console.log("Frank food updated");
    // });
    // try {
    //   const docRef = await addDoc(collection(db, "users"), {
    //     first: "Ada",
    //     last: "Lovelace",
    //     born: 1815
    //   });
    //   console.log("Document written with ID: ", docRef.id);
    // } catch (e) {
    //   console.error("Error adding document: ", e);
    // }
    
    // Add a new document in collection "cities"
    // await setDoc(doc(db, "cities", "LA"), {
    //   name: "Los Angeles",
    //   state: "CA",
    //   country: "USA"
    // });

   
  }
  return(
    <div>
      <button onClick={()=>{
        // console.log("onclick")
        onAdd()
        }}> Firestore add</button>
    </div>
  )
}
function FirestoreList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const auth = getAuth(appFb)
  
    // login状態が変更されたら
    console.log("authe.name:",auth.name);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log("user:", user)
        const db = getFirestore()
        // loginしてたら
        let tasks = []
        const q = query(collection(db, 'tasks'), where('uid', '==', `${user.uid}`))
        onSnapshot(q, (snapshot) => {
          snapshot.docChanges().forEach((change) => {
            if (change.type === 'added') {
              // console.log('added: ', change.doc.data())
              tasks.push({
                id: change.doc.id,
                name: change.doc.data().name
              })
              // console.log(tasks)
            }
          })
          setTasks(tasks)
        })
      }
    })
  }, []);

  return (
    <div>
      {tasks.map(val => (
        <div key={val.name}>{val.name}</div>
      ))}
    </div>
  );
}
const googleHandler = async () => {
    provider.setCustomParameters({ prompt: 'select_account' });
    signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // redux action? --> dispatch({ type: SET_USER, user });
        })
        .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
};
signOut(auth)
.then(() => {
    console.log('logged out');
    // navigate('/');
})
.catch((error) => {
    console.log(error);
});

