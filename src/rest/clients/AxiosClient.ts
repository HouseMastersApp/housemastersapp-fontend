import axios from "axios";

const url = "";

export default axios.create({
  url,
  headers: {
    "Accept": "Application/json",
    "Content-Type": "Application/json"
  }
});