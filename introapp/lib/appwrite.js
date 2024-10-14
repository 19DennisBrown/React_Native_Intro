
import { Client, Account, Avatars, Databases, ID } from 'react-native-appwrite';



export const appwriteConfig = {
  endpoint: 'https://cloud.appwrite.io/v1',
  platform: 'com.hawawii.movie',
  projectId: '670ca9720012a68e11c2',
  databaseId: '670cae6e0024f14d12ad',
  userCollectionId: '670caecd000ee3413347',
  videoCollectioId: '670caf1e00319fc7b6dd',
  storageId: '670cb1e2000125f79656'
}

// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(appwriteConfig.endpoint) // Your Appwrite Endpoint
    .setProject(appwriteConfig.projectId) // Your project ID
    .setPlatform(appwriteConfig.platform) // Your application ID or bundle ID.
;

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client)

export const createUser = async (username, email, password)=>{
  // Register User
  try{
    const newAccount = await account.create(
      ID.unique(),
      email,
      username,
      password
    )

    if(!newAccount) throw Error;
    const avatarUrl  = avatars.getInitials(username)

    await signIn(email, password)
    const newUser = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      ID.unique(),
      {
        accountId: newAccount.$id,
        username: username,
        email: email,
        avatar: avatarUrl
      }
    )
    return newUser;
  }
  catch(err){
    console.log(err)
    throw new Error(err)
  }
}

export const signIn = async (email, password)=>{
  try {
    const session = await account.createEmailPasswordSession(email, password)

    return session;
  } catch (err) {
    console.log(err)
    throw new Error(err)    
  }

}
