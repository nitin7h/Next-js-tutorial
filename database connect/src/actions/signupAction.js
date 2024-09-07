export const submitHandle = async(e) => {
    const rawFormData = {
        fullName: e.get("fullName"),
        email: e.get("email"),
        password: e.get("password"),
    };

    console.log("Ye kaam Kar rha hai : ", rawFormData);

    let a = await fetch("/api/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(rawFormData),
    });

    // let response = await a.json();

    // console.log("response POST : ", response);
};