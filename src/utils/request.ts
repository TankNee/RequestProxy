import superagent from "superagent";

export const request = (method: string, url: any, param: any) => {
    let result;
    switch (method) {
        case "get":
            break;
        case "post":
            result = superagent.post(url).send(param);
            break;
        default:
            break;
    }
    return result;
};
