let userRole = "Employee";
let accessLevel;
let isLoggedIn = true;
let userCategory;
let userMessage;
let userType = "Subscriber";
let isAuthenticated = true;
let authenticationStatus;

if (userRole === "Employee"){
    accessLevel = "Full access granted!";
}else if (userrole === "Enrolled member"){
    accessLevel = "Full access granted with one-on-one interaction";
}else if (userrole === "Subscriber"){
    accessLevel = "Pertial access granted";
}else{
    accessLevel = "Enroll or at least subscribe first to avail this facility";
}
console.log("Access Level:",accessLevel);

if(isLoggedIn){
    if(userRole ==="Employee"){
        userMessage = "Welcome Employee!";
    }else if (userRole === "Enrolled member"){
        userMessage = "Welcome Member!";
    }else if(userRole === "Subscriber"){
        userMessage = "Welcome Subscriber!";
    }else{
        userMessage = ("welcome! Please subscribe")
    }
}else{
    userMessage = "Please login to system";
}
console.log("User message:",userMessage);

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "Subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}
console.log("User category:",userCategory);

authenticationStatus = isAuthenticated? "Authenticated":"Not Authenticated";
console.log("Autehntication Status:",authenticationStatus);

