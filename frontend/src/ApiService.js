import axios from "axios";

export default class ApiService {
  // Profile
  static UpdateUserInfo(
    user_id,
    first_name,
    last_name,
    house_name,
    road_no,
    block_no,
    area,
    city,
    district,
    mobilePhone
  ) {
    var formData = new FormData();
    formData.append("first_name", first_name);
    formData.append("last_name", last_name);
    formData.append("house_name", house_name);
    formData.append("road_no", road_no);
    formData.append("block_no", block_no);
    formData.append("area", area);
    formData.append("city", city);
    formData.append("district", district);
    formData.append("mobilePhone", mobilePhone);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data;application/json;",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
      body: formData,
    };

    return axios.put(
      `${process.env.REACT_APP_API_URL}/accounts/userInfo/${user_id}/`,
      formData,
      config
    );
  }

  static UpdateUserInfo_ProfilePic(user_id, profile_pic) {
    var formData = new FormData();
    formData.append("profile_pic", profile_pic);
    formData.append("is_profile_pic_updated", true);
    const config = {
      headers: {
        "Content-Type": "multipart/form-data;application/json;",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
      body: formData,
    };

    return axios.put(
      `${process.env.REACT_APP_API_URL}/accounts/userInfo/${user_id}/`,
      formData,
      config
    );
  }

  // Insert_ContactUs
  static Insert_ContactUs(user_id, name, subject, desc) {
    var formData = new FormData();
    formData.append("user_id", user_id);
    formData.append("name", name);
    formData.append("subject", subject);
    formData.append("desc", desc);

    const config = {
      headers: {
        "Content-Type": "multipart/form-data;application/json;",
        Authorization: `JWT ${localStorage.getItem("access")}`,
        Accept: "application/json",
      },
      body: formData,
    };

    return axios.post(
      `${process.env.REACT_APP_API_URL}/gk/contact/`,
      formData,
      config
    );
  }
}
