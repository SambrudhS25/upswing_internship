# Use a lightweight JDK base image
FROM openjdk:23 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy the build artifacts (JAR file) into the container
COPY build/libs/*.jar app.jar

# Expose the application port
EXPOSE 8081

# Set the entrypoint to run the Spring Boot application
ENTRYPOINT ["java", "-jar", "app.jar"]
