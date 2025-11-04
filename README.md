# 💬 ChatApp – AI Chat Assistant

This is a simple full-stack AI chatbot project built using **FastAPI (Python)** for the backend and **React (Vite)** for the frontend.  
It uses the **Groq Llama-3.1-8B-Instant** model to generate intelligent chat responses.

---

## 🚀 Tech Stack

| Technology | Description |
|-------------|--------------|
| 🧠 **AI Model** | Groq Llama-3.1-8B-Instant |
| ⚙️ **Backend** | FastAPI (Python) |
| 💻 **Frontend** | React (Vite) |
| ☁️ **Deployment** | Render (Backend) & Vercel (Frontend) |

---

## ✨ Features

✅ FastAPI backend with REST API  
✅ React (Vite) frontend  
✅ Real-time intelligent chat using Groq API  
✅ Simple conversation management  
✅ CORS enabled for frontend-backend communication  
✅ Fully deployed and accessible online

---

## 📂 Project Structure
```
chatapp/
├── Backend/
│ ├── app.py
│ ├── .env
│ ├── requirements.txt
└── Frontend/
├── src/
├── package.json
├── vite.config.js
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone Repository
```
git clone https://github.com/leonrock128/chatapp.git
cd chatapp
```

### 2️⃣ Setup Backend
```
cd Backend
```

Create and activate a virtual environment:
```
conda create -n chatbot python=3.11
conda activate chatbot
```
Install dependencies:
```
pip install -r requirements.txt
```


Create a .env file inside backend/:
```
GROQ_API_KEY=your_groq_api_key_here

```

Run Backend:
```
uvicorn app:app --reload
```

---

### 3️⃣ Setup Frontend
```
cd Frontend
npm install
```
Create a .env file inside frontend/:
```
VITE_BACKEND_URL=http://127.0.0.1:8000
```

Run Frontend:
```
npm run dev
```

---

## API Usage Example
**POST /chat/**  

**Request:**
```
{
  "message": "Hello!",
  "role": "user",
  "conversation_id": "12345"
}
```
**Response:**
```
{
  "response": "Hi there! How can I help you today?",
  "conversation_id": "12345"
}
```

---

### 🌍 Live Demo

 [View Live ChatApp](https://chatapp-frontend-lovat-delta.vercel.app/)
