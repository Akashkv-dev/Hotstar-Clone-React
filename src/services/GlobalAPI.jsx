import axios from "axios";

const getVideos = axios.get("https://api.watchmode.com/v1/autocomplete-search/?apiKey=2FTyOzQaZgjBgjDYoU9iutjRtqToOCGSAzeHe6BP&search_value=Breaking%20bad&search_type=1");

export default{
    getVideos
}