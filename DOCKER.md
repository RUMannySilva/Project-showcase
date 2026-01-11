# Docker Setup

Simple Docker configuration for the portfolio website.

## Quick Start

### Build and run with Docker Compose
```bash
docker-compose up --build
```

### Or build and run manually
```bash
# Build the image
docker build -t manny-showcase .

# Run the container
docker run -p 3000:3000 manny-showcase
```

## Development

For development, it's recommended to use:
```bash
npm run dev
```

Docker is best suited for production deployments.

## Notes

- The app will be available at `http://localhost:3000`
- The Dockerfile uses multi-stage builds for optimal image size
- Standalone output is enabled in `next.config.ts` for Docker compatibility


