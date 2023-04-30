import { auth } from "../../firebase/config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


export const authSignUpUser = ({ email, password, login }) => async (dispatch, getState) => {
    console.log("email, password, nickname", email, password, login);
    try {
       const user = await createUserWithEmailAndPassword(auth, email, password);
    //    console.log('user', user);
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

