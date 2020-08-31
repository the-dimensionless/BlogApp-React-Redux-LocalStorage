
export default class Auth {
    constructor(history) {
        this.history = history;
        this.userProfile = null;
    }

    login = (user) => {
        let listOfUsers = localStorage.getItem('listOfUsers');
        let currentUser = null;

        if (listOfUsers) {
            let list = JSON.parse(listOfUsers);
            let flag = false;
            list.forEach((u) => {
                if (u["email"] === user["email"]) {
                    currentUser = u;
                    flag = true;
                }
            })

            if (flag === false) {
                return "signup"
            }

            if (currentUser["password"] !== user["password"]) {
                return "Wrong password"
            } else {
                localStorage.setItem("currentUser", JSON.stringify(currentUser))
                this.userProfile = currentUser;
                localStorage.setItem("isLoggedIn", "true");
                return "success"
            }
        } else {
            return "signup"
        }
    };

    logout = () => {
        localStorage.removeItem('currentUser');
        localStorage.setItem('isLoggedIn', 'true');
    }

    isAuthenticated = () => {
        let val = localStorage.getItem('isLoggedIn');
        return (val === 'true') ? true : false
    }

    getUserDetails = () => {
        let val = localStorage.getItem('currentUser');
        return JSON.parse(val);
    }

    signup = (user) => {
        let listOfUsers = localStorage.getItem('listOfUsers');
        let list = (listOfUsers) ? JSON.parse(listOfUsers) : [];
        list.push(user);
        localStorage.setItem('listOfUsers', JSON.stringify(list));

        console.log("new user list -> ", list);
        return;
    }

}