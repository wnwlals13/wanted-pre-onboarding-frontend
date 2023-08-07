import axios from "axios";

const host = "https://www.pre-onboarding-selection-task.shop/";

const apiClient = axios.create({
    baseURL: host,
    timeout : 30000,
    headers : {
        "Content-Type" : "application/json"
    }
});

export default apiClient;