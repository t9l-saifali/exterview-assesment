# Exterview Assessment

This project contains two main components: the **frontend** (which handles the UI and real-time video meetings) and the **backend** (which handles the code execution using the JS compiler and video meeting APIs). To run the project locally, you only need to start the **frontend** component, as it connects to the backend deployed on AWS Lambda.


### Steps to Run Locally

1. **Clone the repository**  
   First, clone the repository to your local machine:
   ```bash
   git clone https://github.com/t9l-saifali/exterview-assesment.git


Navigate to the frontend folder
Go to the frontend directory:

cd exterview-assesment/frontend


Install dependencies
Install the necessary dependencies by running:

npm install -f


Run the frontend locally
To start the frontend development server, run the following command:

npm run dev

This will start the project on http://localhost:3000 (or another available port).

Backend (Deployed)
The backend has already been deployed to AWS Lambda using the Serverless Framework, and GraphQL APIs are used for the code execution and video meeting functionalities. The frontend communicates with the backend remotely.

Project Structure
The repository is structured as follows:

graphql
Copy code
exterview-assesment/
├── backend/          # Backend logic, deployed on AWS Lambda
└── frontend/         # Frontend UI, built with Next.js and MUI


Contact
If you have any questions or need further clarification, feel free to reach out to me at:
Saif Ali
Phone: 7351943349

