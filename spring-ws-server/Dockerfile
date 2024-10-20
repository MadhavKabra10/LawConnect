FROM openjdk:17
WORKDIR /app
COPY ./spring-ws-server/target/chat-0.0.1-SNAPSHOT.jar /app/law_connect.jar
EXPOSE 8080
ARG PAYPAL_CLIENT_ID
ARG PAYPAL_CLIENT_SECRET
ARG TWILIO_SID
ARG TWILIO_AUTH_TOKEN
ARG TWILIO_PHONENO
ARG SECRET_KEY
ARG SPRING_DATA_MONGODB_URI
ARG SERVER_PORT
ENV PAYPAL_CLIENT_ID=$PAYPAL_CLIENT_ID \
    PAYPAL_CLIENT_SECRET=$PAYPAL_CLIENT_SECRET \
    TWILIO_SID=$TWILIO_SID \
    TWILIO_AUTH_TOKEN=$TWILIO_AUTH_TOKEN \
    TWILIO_PHONENO=$TWILIO_PHONENO \
    SECRET_KEY=$SECRET_KEY \
    SPRING_DATA_MONGODB_URI=$SPRING_DATA_MONGODB_URI \
    SERVER_PORT=${SERVER_PORT:-8080}

ENTRYPOINT ["java", "-jar", "law_connect.jar", \
    "--paypal.client-id=${PAYPAL_CLIENT_ID}", \
    "--paypal.client-secret=${PAYPAL_CLIENT_SECRET}", \
    "--application.properties.account-sid=${TWILIO_SID}", \
    "--application.properties.authToken=${TWILIO_AUTH_TOKEN}", \
    "--application.properties.phoneNo=${TWILIO_PHONENO}", \
    "--application.properties.jwt-secret=${SECRET_KEY}", \
    "--spring.data.mongodb.uri=${SPRING_DATA_MONGODB_URI}", \
    "--server.port=${SERVER_PORT}"]
