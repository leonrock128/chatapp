# ChatApp – AI Chat Assistant

This is a simple full-stack AI chatbot project built using **FastAPI (Python)** for the backend and **React (Vite)** for the frontend.  
It uses the **Groq Llama-3.1-8B-Instant** model to generate intelligent chat responses.

---

## Features
- FastAPI backend with REST API
- React (Vite) frontend
- Groq API integration
- Simple conversation management
- CORS enabled for frontend-backend communication

---

## Project Structure
chatapp/
├── Backend/
│ ├── app.py
│ ├── .env
│ ├── requirements.txt
└── Frontend/
└── chatui/
├── src/
├── package.json
├── vite.config.js



---

## Backend Setup
1. Go to the backend folder:
cd Backend


2. (Optional) Create and activate a virtual environment:
conda create -n chatbot python=3.11
conda activate chatbot


4. Install dependencies:
pip install -r requirements.txt


or manually:
pip install fastapi uvicorn python-dotenv groq



4. Create a `.env` file in the Backend folder:
GROQ_API_KEY=your_groq_api_key_here



5. Run the backend:
uvicorn app:app --reload

yaml
Copy code
The backend will run at: **http://127.0.0.1:8000**

---

## Frontend Setup
1. Go to the frontend folder:
cd ../Frontend



2. Install dependencies:
npm install



3. Run the frontend:
npm run dev


The frontend will run at: **http://localhost:5173**

---

## API Usage Example
**POST /chat/**  

**Request:**

{
  "message": "Hello!",
  "role": "user",
  "conversation_id": "12345"
}

**Response:**

{
  "response": "Hi there! How can I help you today?",
  "conversation_id": "12345"
}
