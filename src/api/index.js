export const url = "http://localhost:8000";

export const setHeaders = () =>{
    const headers = {
        headers:{
            "x-access-token": localStorage.getItem("token"),
        },
    };
    return headers;
};