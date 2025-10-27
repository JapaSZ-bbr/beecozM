import { initializeApp } from "firebase/app";
import {
  collection,
  doc,
  getFirestore,
  onSnapshot,
  orderBy,
  query,
  QuerySnapshot,
  serverTimestamp,
  setDoc,
  where,
  addDoc,
  updateDoc,
  arrayUnion,
  getDoc,
  getDocs,
  DocumentData,
} from "firebase/firestore";
import React, { SetStateAction } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyArxYAoLzlOWogTgEaq3tXOTcHAzybFs-E",
  authDomain: "beecoz-9c997.firebaseapp.com",
  projectId: "beecoz-9c997",
  storageBucket: "beecoz-9c997.appspot.com",
  messagingSenderId: "164035433752",
  appId: "1:164035433752:web:7a2258720e792ca06a3a6d",
};

export const addUser = async (sender: {
  id: number;
  name: string;
  login: string;
  avatar: string;
  type: string;
}) => {
  await setDoc(doc(db, "users", sender.login), {
    id: sender.id,
    login: sender.login,
    name: sender.name,
    type: sender.type,
    avatar: sender.avatar,
  });
};

export const addNewChat = async (
  sender: { id: string; name: string; login: string; avatar: string } | null,
  receiver: { id: string; name: string; login: string; avatar: string },
  interestId: string,
  publicationId: string,
  setChatIdContext: React.Dispatch<SetStateAction<string | null>>
) => {
  const senderUserRef = doc(db, "users", String(sender?.login));
  const receiverUserRef = doc(db, "users", receiver.login);

  const chat = await addDoc(collection(db, "chats"), {
    messages: [],
    users: [String(sender?.id), receiver.id],
    interestId: interestId,
    publicationId: publicationId,
  });

  await updateDoc(senderUserRef, {
    chats: arrayUnion({
      chatId: chat.id,
      title: receiver.name,
      avatar: receiver.avatar,
      with: receiver.login,
      interestId: interestId,
      publicationId: publicationId,
    }),
  });

  await updateDoc(receiverUserRef, {
    chats: arrayUnion({
      chatId: chat.id,
      title: String(sender?.name),
      avatar: String(sender?.avatar),
      with: String(sender?.login),
      interestId: interestId,
      publicationId: publicationId,
    }),
  });

  setChatIdContext(chat.id);
};

export const getAllOpenedChats = (userEmail: string, setChat: any) => {
  let chats: Array<any> = [];

  console.log(userEmail);

  const setQuery = query(
    collection(db, "users"),
    where("login", "==", userEmail)
  );

  const onsubscribe = onSnapshot(setQuery, (querySnapshot) => {
    console.log(" listAllMessagesOfCurrentChat snapshot", querySnapshot.docs);

    querySnapshot.forEach((doc) => {
      const data = doc.data();

      console.log("data", ...data.chats);

      chats.push(...data.chats);
    });
    setChat(chats);
  });
};

export const getAllMessagesOfCurrentChating = (
  chatId: string,
  userId: string,
  setMessages: React.Dispatch<
    SetStateAction<
      Array<{
        id: string;
        chatId: string;
        userId: string;
        message: string;
        timestamp: string;
        typeUser: "Client" | "Autonomous";
      }>
    >
  >
) => {
  const setQuery = query(collection(db, "messages"), orderBy("timestamp"));

  onSnapshot(setQuery, (querySnapshot) => {
    let messages: Array<any> = [];

    querySnapshot.forEach((doc) => {
      const data = doc.data();

      if (data.chatId === chatId) {
        messages.push({
          id: data.id,
          chatId: data.chatId,
          userId: data.userId,
          message: data.message,
          timestamp: data.timestamp,
          typeUser: data.typeUser,
        });
      }

      console.log(data);
    });

    setMessages(messages);
  });
};

export const sendNewMessage = async (
  chatId: string,
  userId: string,
  message: string,
  typeUser: "Client" | "Autonomous"
) => {
  await addDoc(collection(db, "messages"), {
    chatId: chatId,
    userId: userId,
    message: message,
    timestamp: serverTimestamp(),
    typeUser: typeUser,
  });
};



// export const DeleteManyChatsByPublicationId = async (
//   publicationId: string,
//   clientLogin: string,
//   autonomousLogin: string
// ) => {  
//   const clientDocReference = doc(db, 'users', clientLogin)
  
//   // const docClientSnap = await getDoc(clientDocReference)

//   // if (docClientSnap.exists()) {
//   //   onSnapshot(docClientSnap, (querySnapshot) => {

//   //   })
//   // }

//   // const clientQuery = doc(db, "users", clientLogin);
//   // const autonomousQuery = query(
//   //   collection(db, "users", autonomousLogin, "chats")
//   // );

//   // const querySnapshot = await getDocs(collection(db, "users"));

//   // querySnapshot.forEach((doc) => {
//   //   if (doc.id === clientLogin) {
//   //     console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", doc.id);

//   //     const data = doc.data();

//   //     data.chats.map((doc:  DocumentData) => {
//   //       if (doc.publicationId === publicationId) {
//   //         console.log("aloooo");

//   //         console.log(doc.);
//   //       }
//   //     });
//   //   }
//   // });
// };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
