import {getAllUser} from "../../service/UserService";
import {GET_ALL_STUDENT} from "../Type";

export const getAllUser = () => async (dispatch)=>{
    const res = await getAll()
    dispatch({
        type: GET_ALL_STUDENT,
        payload: res
    })
}