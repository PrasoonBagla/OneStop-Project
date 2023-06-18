import axios from 'axios'
export const handleSubmitSignup = async (name,contact,password) => {
    const data = await axios.post("/customer/signup", {
        name,
        contact,
        password
      });
      console.log(data);
        if(data.status === 201){
            localStorage.setItem("isAuthenticated", "true");
            localStorage.setItem('user', data.data.name);
        }
}
export const sellerHomeapi = async (setShops) => {
    axios.get("/get/shops")
      .then(response => {
        setShops(response.data);
      })
}
export const sellernewshopapi = async (loggedInUser,contact,location,shopName,address,category,desc,makeList) => {
    const data = await axios.post("/enter/location", {
        name: loggedInUser,
        contact: contact,
        longitude: location.loaded ? location.coordinates.lng : "",
        latitude: location.loaded ? location.coordinates.lat : "",
        businessName: shopName,
        address: address,
        category: category,
        description: desc,
        listOfItems: makeList(),
      });
}
export const sellershopapi = async (loggedInUser,loggedInShop,makeList) => {
    const data = await axios.patch("/updateList", {
        nameA: loggedInUser,
        shopName: loggedInShop,
        newItem: makeList()
    });
}
export const sellersignupapi = async (name,contact,password) => {
    const data = await axios.post("/agent/signup", {
        name,
        contact,
        password
      });
      console.log(name);
      if(data.status === 201){
          localStorage.setItem("isAuthenticated", "true");
          localStorage.setItem('user', data.data.name);
      }
}