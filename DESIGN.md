# DESIGN.md

A space for me to doodle about what I want this to be.

## Key Requirements

- I want this to be very simple to deploy on any different sort of infrastructure. Of course the
  main thing that I have in mind in AWS, because that's what we use at work, but nothing should
  really keep this from being something that you could run locally on your computer, although
  obviously it couldn't scale as far.
- We have to support multiple agent backends, like Amp Orbs do. As much as I would love to just
  support Pi, unfortunately Anthropic exists, so we have to have a way to do "Claude Code mode".
