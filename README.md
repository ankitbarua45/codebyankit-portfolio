# codebyankit-portfolio
# 🌐 Personal Portfolio Website

## 📌 Description  
My personal portfolio website showcasing my **skills**, **projects**, and **contact information**. This site is designed to reflect my journey and growth as a developer, while providing an engaging and professional way for others to explore my work.

---

## 🛠️ Tech Stack  
- **HTML** – Structure and layout  
- **CSS** – Styling and responsiveness  
- **JavaScript** – Interactivity and animations  
- **EmailJS** – Contact form email integration

---

## ✨ Features  
- ✅ **Responsive Design** – Optimized for all screen sizes  
- 📁 **Project Previews** – Interactive project cards with GitHub/live links  
- 🙋‍♂️ **About Me** – A brief intro and background  
- 🧠 **Skills Section** – Programming languages and tools  
- 📬 **Contact Form** – Send messages directly using EmailJS  
- 🎨 **Clean UI/UX** – Simple, elegant design with smooth navigation  

---

## 🚀 Live Demo  
[🔗 View Live](https://codebyankit.netlify.app/)  


---
## 📧 Setting up EmailJS
Create an account at EmailJS.

Create a new service and a new email template.

Go to Account > API Keys and copy your public key.

In your JavaScript file (e.g., script.js or contact.js), initialize EmailJS:

javascript
Copy
Edit
emailjs.init("YOUR_PUBLIC_KEY");
Update the send function like this:

javascript
Copy
Edit
emailjs.send(
  "YOUR_SERVICE_ID",
  "YOUR_TEMPLATE_ID",
  {
    from_name: document.getElementById("name").value,
    from_email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  }
)

✅ Done! Your form will now send emails via EmailJS.

## Folder and file structure 

PORTFOLIO/                                                                                                                                                                                                          
├── .vscode/                                                                                                                                                                                                        
│   └── settings.json                                                                                                                                                                                               
├── images/                                                                                                                                                                                                         
│   ├── grid1.png                                                                                                                                                                                                   
│   ├── grid4.png                                                                                                                                                                                                   
│   ├── grid20.png                                                                                                                                                                                                  
│   └── logo1.png                                                                                                                                                                                                   
├── videos/                                                                                                                                                                                                         
│   ├── blackhole.mp4                                                                                                                                                                                               
│   ├── desktop.ini                                                                                                                                                                                                 
│   ├── galaxy.mp4                                                                                                                                                                                                  
│   ├── glob.mp4                                                                                                                                                                                                    
│   ├── hero-video1.mp4                                                                                                                                                                                             
│   ├── km1.mp4                                                                                                                                                                                                     
│   ├── project1.mp4                                                                                                                                                                                                
│   ├── project2.mp4                                                                                                                                                                                                
├── app.js                                                                                                                                                                                                           
├── index.html                                                                                                                                                                                                       
└── style.css                                                                                                                                                                                                           
The following video files are used in the project locally but were **not uploaded to the Git repository** because they exceed the 25 MB limit:

- `glob.mp4`
- `hero-video1.mp4`
- `km1.mp4`
- `project1.mp4`
- `project2.mp4`

Google Drive link-

📄 License
MIT License.
Copyright © 2024 Ankit Barua

## 📸 Screenshots

![Screenshot (142)](https://github.com/user-attachments/assets/173ed093-6cbb-42d4-8cde-9c8daf6accbe)


