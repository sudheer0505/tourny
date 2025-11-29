document.getElementById("registerForm").addEventListener("submit", function(e){
    e.preventDefault();

    let data = {
        teamName: document.getElementById("teamName").value,
        leader: document.getElementById("leaderName").value,
        leaderUid: document.getElementById("leaderUid").value,
        phone: document.getElementById("phone").value,
        p2: document.getElementById("p2").value,
        p3: document.getElementById("p3").value,
        p4: document.getElementById("p4").value,
    };

    // If you have backend API:
    // fetch("https://your-backend-url/register", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(data)
    // })
    // .then(res => res.json())
    // .then(response => {
    //     document.getElementById("msg").innerText = response.message;
    // });

    document.getElementById("msg").innerText = "✔ Team Registered Successfully!";
});
