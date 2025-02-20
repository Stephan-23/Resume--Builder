// Function to show/hide sections based on template selection
document.getElementById("template-select").addEventListener("change", function () {
    const template = this.value;
    const pictureSection = document.getElementById("picture-section");
    const summarySection = document.getElementById("summary-section");

    // Hide all templates
    document.querySelectorAll(".template").forEach((el) => el.classList.add("hidden"));

    // Show selected template
    document.getElementById(`${template}-preview`).classList.remove("hidden");

    // Show/hide form sections
    if (template === "template2") {
        pictureSection.classList.remove("hidden");
        summarySection.classList.add("hidden");
    } else if (template === "template3") {
        summarySection.classList.remove("hidden");
        pictureSection.classList.add("hidden");
    } else {
        pictureSection.classList.add("hidden");
        summarySection.classList.add("hidden");
    }
});

// Function to generate resume
function generateResume() {
    const template = document.getElementById("template-select").value;

    // Update basic details
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const linkedin = document.getElementById("linkedin").value;
    const github = document.getElementById("github").value;
    const portfolio = document.getElementById("portfolio").value;
    const skills = document.getElementById("skills").value;
    const experience = document.getElementById("experience").value;
    const education = document.getElementById("education").value;

    // Update Template 1
    document.getElementById("res-name").textContent = name;
    document.getElementById("res-email").textContent = email;
    document.getElementById("res-phone").textContent = phone;
    document.getElementById("res-linkedin").textContent = linkedin;
    document.getElementById("res-linkedin").href = linkedin;
    document.getElementById("res-github").textContent = github;
    document.getElementById("res-github").href = github;
    document.getElementById("res-portfolio").textContent = portfolio;
    document.getElementById("res-portfolio").href = portfolio;
    document.getElementById("res-skills").textContent = skills;
    document.getElementById("res-experience").textContent = experience;
    document.getElementById("res-education").textContent = education;

    // Update Template 2
    document.getElementById("res-name2").textContent = name;
    document.getElementById("res-email2").textContent = email;
    document.getElementById("res-phone2").textContent = phone;
    document.getElementById("res-linkedin2").textContent = linkedin;
    document.getElementById("res-linkedin2").href = linkedin;
    document.getElementById("res-github2").textContent = github;
    document.getElementById("res-github2").href = github;
    document.getElementById("res-portfolio2").textContent = portfolio;
    document.getElementById("res-portfolio2").href = portfolio;
    document.getElementById("res-skills2").textContent = skills;
    document.getElementById("res-experience2").textContent = experience;
    document.getElementById("res-education2").textContent = education;

    // Update Template 3
    document.getElementById("res-name3").textContent = name;
    document.getElementById("res-email3").textContent = email;
    document.getElementById("res-phone3").textContent = phone;
    document.getElementById("res-linkedin3").textContent = linkedin;
    document.getElementById("res-linkedin3").href = linkedin;
    document.getElementById("res-github3").textContent = github;
    document.getElementById("res-github3").href = github;
    document.getElementById("res-portfolio3").textContent = portfolio;
    document.getElementById("res-portfolio3").href = portfolio;
    document.getElementById("res-skills3").textContent = skills;
    document.getElementById("res-experience3").textContent = experience;
    document.getElementById("res-education3").textContent = education;

    // Update picture (for Template 2)
    if (template === "template2") {
        const pictureInput = document.getElementById("picture");
        if (pictureInput.files && pictureInput.files[0]) {
            const reader = new FileReader();
            reader.onload = function (e) {
                document.getElementById("res-picture-img").src = e.target.result;
            };
            reader.readAsDataURL(pictureInput.files[0]);
        }
    }

    // Update summary (for Template 3)
    if (template === "template3") {
        document.getElementById("res-summary-text").textContent = document.getElementById("summary").value;
    }
}

// Function to download resume as PDF
function downloadResume() {
    const element = document.getElementById("resume-preview");
    html2pdf().from(element).save("resume.pdf");
}