import axios from "../../utils/axios";

export const getBlogs = async () => {
    const response = await axios.get("/videos");

    return response.data;
};
