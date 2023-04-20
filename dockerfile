FROM node:16-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install --production

COPY . .

# Copy .env file to the container
COPY .env ./

# Set environment variables from .env file
ENV NODE_ENV=${NODE_ENV}
ENV PORT=${PORT}
ENV JWT_ACCESS_SECRET=${JWT_ACCESS_SECRET}
ENV JWT_REFRESH_SECRET=${JWT_REFRESH_SECRET}
ENV MONGODB_URI=${MONGODB_URI}
ENV MONGO_DB=${MONGO_DB}
ENV AWS_ACCESS_KEY_ID=${AWS_ACCESS_KEY_ID}
ENV AWS_SECRET_ACCESS_KEY=${AWS_SECRET_ACCESS_KEY}
ENV AWS_REGION=${AWS_REGION}
ENV AWS_BUCKET_NAME=${AWS_BUCKET_NAME}
ENV AWS_BUCKET_FOLDER=${AWS_BUCKET_FOLDER}
ENV ACCESS_TOKEN_EXPIRATION_TIME=${ACCESS_TOKEN_EXPIRATION_TIME}
ENV REFRESH_TOKEN_EXPIRATION_TIME=${REFRESH_TOKEN_EXPIRATION_TIME}

CMD ["npm", "run", "dev"]