export async function updateUserData(): Promise<void> {
  if (States().overwriteDataAllowed) {
    const rawRes: any = await useFetch("api/updateUserData", {
      method: "POST",
      body: {
        name: useCookie("name").value,
        userData: JSON.stringify(User().data),
      },
    })
    if (rawRes.data.value?.name) {
      console.log(timeNow() + ` ⏫ update user data: updated`)
    } else {
      // value is an error
      console.log(timeNow() + ` ❗ update user data: ` + rawRes.data.value)
    }
  } else {
    console.log(timeNow() + ` ❗ update user data: overwrite not allowed`)
  }
}
