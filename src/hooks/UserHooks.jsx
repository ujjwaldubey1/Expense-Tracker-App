export const useUserData = () => {
    const userData = JSON.parse(localStorage.getItem("user"))
    // console.log(userData)
    return userData
}

export const useSetUserData = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData))
}

export const useUpdateUserData = (key, value) => {
    const userData = useUserData()
    const newUserData = { ...userData, [key]: value }
    useSetUserData(newUserData)
    // console.log("After Deleting", useUserData())
}

export const useAddUserExpenses = (value) => {
    const userData = useUserData()
    userData.expenses.push(value)
    useSetUserData(userData)
    // useUserData()
}
