
import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { collection, onSnapshot } from 'firebase/firestore';

const firebaseApp = initializeApp();
const useFirebase = pathRoot => {
  const [documents, setDocuments] = useState(null)

  useEffect(() => {
    const firestore = firebaseApp.firestore
    const docRef = collection(firestore, pathRoot)

    const unsub = onSnapshot(docRef, snapshot => {
      let results = []
      snapshot.docs.forEach(doc => {
        results.push({ ...doc.data(), id: doc.id })
      })
      setDocuments(results)
    })

    return () => unsub()
  }, [pathRoot])

  return { documents }
}
const BooksGet = () => {
  const { documents: books } = useFirebase("Books")

  console.log(books)
  return books[0] ? (
    books.map(book => (
      <div key={book.id}>
        <p>{book.title}</p>
        <p>{book.author}</p>
        <p>{book.category}</p>
      </div>
    ))
  ) : (
    <p>データがありません</p>
  )
}
export default BooksGet;