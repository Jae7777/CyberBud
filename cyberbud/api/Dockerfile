# Use a minimal Linux distribution as the base image
FROM alpine:latest

# Install necessary tools or libraries
RUN apk add --no-cache bash

# Create a user with limited privileges
RUN adduser -D limiteduser

# Set the user
USER limiteduser

#start a bash shell
CMD ["/bin/bash"]

