import 'dotenv/config';

export const api_port = process.env.PORT || 8000;

export const db_connection = process.env.DB_CONNECTION_URI;

export const jwt_secret = process.env.JWT_SECRET;
