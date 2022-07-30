const params = new URLSearchParams(window.location.search);
const username = params.get("username");
if(username == "Admin"){
    location.href = "admin.html"
}else{
    location.href = `home.html?user=${username}`
}
