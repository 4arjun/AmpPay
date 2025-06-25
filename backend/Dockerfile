# Use a lightweight base image
FROM python:3.11-slim  

# Prevents Python from writing .pyc files to disk
ENV PYTHONUNBUFFERED=1

# Set working directory
WORKDIR /app

# Install build dependencies first (needed for many Python packages)
RUN apk add --no-cache \
    build-base \
    libffi-dev \
    musl-dev \
    gcc \
    postgresql-dev \
    jpeg-dev \
    zlib-dev \
    python3-dev \
    py3-pip \
    bash

# Install Python dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy project files
COPY . .

# Expose port (optional but good practice)
EXPOSE 80

# Default command to run the Django server
CMD ["python", "manage.py", "runserver", "0.0.0.0:80"]
