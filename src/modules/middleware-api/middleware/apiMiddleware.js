import {
    getDataRequest,
    getDataSuccess,
    getDataError,
    deleteDataRequest,
    deleteDataSuccess,
    deleteDataError,
    postDataRequest,
    postDataSuccess,
    postDataError,
    updateDataRequest,
    updateDataSuccess,
    updateDataError
} from "../redux/slice/api.slice";
import { setTotalPages, setPerPage, setNextPage, setPrevPage, setCurrentPage } from "../redux/slice/pagination.slice"
import { get, post, put, del } from "../axios"
import isEmailExist from "../validations/isEmailExist"

const accessToken = "53a6801d6252318add7991f95c993ae2820c4ba06a6826d0362eace3e32063cf";

let baseURL = 'https://gorest.co.in/public/v1/users'

export const getData = (currentPage, perPage) => async (dispatch) => {

    dispatch(getDataRequest());
    await get(`${baseURL}?page=${currentPage}&per_page=${perPage}`, accessToken)
        .then((response) => {
            dispatch(setTotalPages(response.data.meta.pagination.pages));
            dispatch(getDataSuccess(response.data.data));
        })
        .catch((error) => {
            dispatch(setTotalPages(0));
            dispatch(getDataError(error.message));
        });

};

// export const getData = (page) => async (dispatch) => {

//     dispatch(getDataRequest());
//     await get(`${baseURL}?page=${page}&per_page=10`, accessToken)
//         .then((response) => {

//             dispatch(getDataSuccess(response.data));
//         })
//         .catch((error) => {
//             dispatch(getDataError(error.message));
//         });

// };

export const postData = (data, arrData) => async (dispatch) => {

    if (isEmailExist(arrData, data.email)) {
        dispatch(postDataError("Email already exist"));
        return;
    } else {
        dispatch(postDataRequest())
        await post(baseURL, data, accessToken)
            .then(() => {
                dispatch(postDataSuccess("User added successfully"));
            })
            .catch((error) => {
                dispatch(postDataError(error.message));
            });
    }
};

export const putData = (data, id) => async (dispatch) => {


    dispatch(updateDataRequest())
    await put(baseURL, id, data, accessToken)
        .then(() => {
            dispatch(updateDataSuccess("User updated successfully"));
        })
        .catch((error) => {
            dispatch(updateDataError(error.message));
        });

};
export const delData = (id) => async (dispatch) => {

    dispatch(deleteDataRequest())
    await del(baseURL, id, accessToken)
        .then(() => {
            dispatch(deleteDataSuccess("User deleted successfully"));
        })
        .catch((error) => {
            dispatch(deleteDataError(error.message));
        });

};




