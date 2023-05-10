import { auth } from "../../firebase/config";
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    updateProfile, 
    onAuthStateChanged 
} from "firebase/auth";
import { authSlice } from "./authReducer";
const { updateUserProfile } = authSlice.actions;


export const authSignUpUser = ({ email, password, login }) => async (dispatch, getState) => {
    console.log("email, password, nickname", email, password, login);
    try {
       await createUserWithEmailAndPassword(auth, email, password);
       const user = await auth.currentUser;
        console.log(user)
        const { displayName, uid } = await auth.currentUser;

        await updateProfile(user, {
            displayName: login,
          });

        dispatch(updateUserProfile({
            userId: uid,
            login: displayName,
        }))
    //    dispatch(authSlice.actions.updateUserProfile({ userId: user.uid }))
       console.log('user', user);
       
    } catch (error) {
        console.log("error", error);
        console.log("error.message", error.message);
        throw error;
    }
};
export const authSignInUser = ({ email, password }) => async (dispatch, getState) => {
    try {
        const user = await signInWithEmailAndPassword(auth, email, password);
        // console.log('user', user);
     } catch (error) {
         console.log("error", error);
         console.log("error.message", error.message);
         throw error;
     }
};

export const authSignOutUser = () => async (dispatch, getState) => {};

export const authStateChange = () => async (dispatch, getState) => {
    onAuthStateChanged(auth, (user) => setUser(user));
};

